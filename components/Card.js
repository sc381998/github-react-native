import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import githubIcon from '../assets/github.png';
import watchersIcon from '../assets/watcher.png';
import issuesIcon from '../assets/issues.png';
import starsIcon from '../assets/stars.png';
import forkIcon from '../assets/fork.png';

function Card(props) {
    const { name, owner, watchers_count, description, open_issues_count, forks_count, language, stargazers_count, default_branch } = props;
    const kFormatter = (num) => {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{owner.login}/<Text style={styles.strongText}>{name}</Text></Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: owner.avatar_url
                        }}
                    />
                </View>
            </View>

            <View style={[styles.row, styles.footer]}>
                <View style={styles.onlyRow}>
                    <Image
                        style={styles.tinyLogo}
                        source={watchersIcon}
                    />
                    <View>
                        <Text style={styles.count}>{kFormatter(watchers_count)}</Text>
                        <Text style={styles.footerText}>Watchers</Text>
                    </View>
                </View>
                <View style={styles.onlyRow}>
                    <Image
                        style={styles.tinyLogo}
                        source={issuesIcon}
                    />
                    <View>
                        <Text style={styles.count}>{kFormatter(open_issues_count)}</Text>
                        <Text style={styles.footerText}>Issues</Text>
                    </View>
                </View>
                <View style={styles.onlyRow}>
                    <Image
                        style={styles.tinyLogo}
                        source={starsIcon}
                    />
                    <View>
                        <Text style={styles.count}>{kFormatter(stargazers_count)}</Text>
                        <Text style={styles.footerText}>Stars</Text>
                    </View>
                </View>
                <View style={styles.onlyRow}>
                    <Image
                        style={styles.tinyLogo}
                        source={forkIcon}
                    />
                    <View>
                        <Text style={styles.count}>{kFormatter(forks_count)}</Text>
                        <Text style={styles.footerText}>Forks</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        shadowOpacity: 0.1,
        padding: 8,
        margin: 10,
        borderRadius: 1,
        width: 320,
        elevation: 1,
        height: 140,
    },
    footer: {
        position: "absolute",
        bottom: 2,
        justifyContent: "space-around"

    },
    footerText:{
        color: "#5A5A5A",
        fontSize: 12
    },
    onlyRow: {
        flexDirection: "row"
    },
    strongText: {
        fontWeight: 700
    },
    titleContainer: {
        width: 220,
    },
    imageContainer: {
        position: "absolute",
        right: 0,
        alignItems: "flex-end"
    },
    title: {
        fontSize: 20
    },
    descriptionText: {
        fontSize: 12
    },
    row: {
        width: 310,
        flexDirection: "row",
    },
    count:{
        fontWeight: 600
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    tinyLogo: {
        width: 15,
        height: 15,
        marginRight: 2,
        marginTop: 4
    }
});
export default Card