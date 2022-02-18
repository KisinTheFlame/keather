/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, View,} from 'react-native';
import axios from 'axios';

const App = () => {
    const [text, setText] = useState("");

    function handleClick() {
        // axios
        //     .get(
        //         "https://www.baidu.com/"
        //     )
        //     .then((response) => {
        //         console.log(response);
        //         setText(response.data.content);
        //     })
        //     .catch(reason => console.log(reason));
        fetch("https://statistics.kisin.tech")
            .then(value => console.log(value.text()))
            .catch(reason => console.log(reason));
    }

    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <Button title={"Click"} onPress={handleClick}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default App;
