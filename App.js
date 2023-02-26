import { useContext, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TextInput, SafeAreaView, Button, ActivityIndicator } from 'react-native';
import Context, { GithubContext } from './utils/Context';
import Card from "./components/Card";

function App() {
  const { githubData, fetchGithubData, isLoading } = useContext(GithubContext);
  const [text, setText] = useState("");
  const [searchClicked, setSearchClicked] = useState(false)
  const handleSearch = () => {
    setSearchClicked(true);
    fetchGithubData(text);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Search Repositories</Text>
      <SafeAreaView style={styles.header}>
        <TextInput
          style={styles.input}
          onChangeText={val => setText(val)}
          value={text}
          placeholder="Enter your username"
        />
        <View style={styles.searchButton}>
          <Button
            onPress={handleSearch}
            title="Search"
            color="#841584"
          />
        </View>

      </SafeAreaView>
      <View style={styles.cardList}>
        <Text style={styles.grayText}>Showing result of <Text style={styles.strongText}>{searchClicked ? text : "visionmedia"}</Text></Text>
        {isLoading ? 
          <ActivityIndicator /> :
          <FlatList
            data={githubData}
            renderItem={({ item }) => <Card {...item} />}
            ListEmptyComponent={<View style={styles.center}><Text>No repositories found</Text></View>}
          />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    alignItems: "center"
  },
  center: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10
  },
  strongText: {
    fontWeight: 600
  },
  header: {
    flex: 0.2,
    flexDirection: "row"
  },
  grayText: {
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 2,
    color: "#5A5A5A",
  },
  searchButton: {
    marginTop: 15,
    marginRight: 10
  },
  cardList: {
    flex: 0.8,
  },
  input: {
    width: 240,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  )
}