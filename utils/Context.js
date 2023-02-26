import { createContext, useState, useEffect  } from "react";
import { Keyboard } from 'react-native'
export const GithubContext = createContext();

const Context = ({children}) => {
    const [githubData, setGithubData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchGithubData = async (username) => {
        setIsLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        let jsonData = await response.json();
        jsonData = jsonData.filter(ele => !ele.private);
        setGithubData(jsonData);
        setIsLoading(false);
        Keyboard.dismiss();
    }
    useEffect(() => {
        fetchGithubData("visionmedia");
    }, [])

    return <GithubContext.Provider value={{githubData, isLoading, fetchGithubData}}>{children}</GithubContext.Provider>
}

export default Context;