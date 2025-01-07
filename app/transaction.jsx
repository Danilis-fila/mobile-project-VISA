import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SQLite from 'react-native-sqlite-storage';

export default function Transaction({title = "job", money = 1}) {
    console.log ("1")
    return (
        <View style={styles.transaction__item}>
            {/* <Image style={styles.transaction__image} source={require('./image/dollar.svg')}/> */}
            <Text style={{backgroundColor: 'green'}}>{title}</Text>
            <Text style={{backgroundColor: 'green'}}>{money}</Text>
        </View>   
    )
}

const styles = StyleSheet.create({
    
    transaction__item: {
        width:"100%",
        height: 50,
        backgroundColor: "yellow"
    },
    transaction__image: {
        width: 50,
        height: 50
    }
});

