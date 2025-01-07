import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SQLite from 'react-native-sqlite-storage';
import Transaction from "./transaction";

export default function MyCards() {
    // const db = SQLite.openDatabase({name: 'cardHistore', location: 'default'},()=>{},error=>{console.log(error)})
    // const createTable = () => {
    //     db.transaction((tx) => {
    //         tx.executeSql(
    //             "CREATE TABLE IF NOT EXISTS Histore (ID INTEGER PRIMARY KEY AUTOINCREMENT, description STRING, money DOUBLE)"
    //         )
    //     })
    // }

    const arr = [
        {title:"my job1", money:"10"},
        {title:"my job2", money:"20"},
        {title:"my job3", money:"30"},
        {title:"my job4", money:"40"},
        {title:"my job5", money:"50"}
    ]
    return (
        <View style={styles.myCards__wrapper}>
            <View style={styles.transaction__wrapper}>
                <Transaction title="1title" money="2100"/>                            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    myCards__wrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: '#000000'
    },
    transaction__wrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: '#000000',
        display: "flex"
    },
});