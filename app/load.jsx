import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Load() {
    return (
        <View style={styles.load__wrapper}>
            <Text style ={styles.load__letter}>F</Text>
            <Text style ={styles.load__title}>It's time to start investing</Text>
            <Text style ={styles.load__desc}>We`ll help you create an excellent portfolio for the most successful investments</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    load__wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor:'#032525'
    },
    load__letter: {
        fontSize: 240,
        color: '#f5f878',
        textAlign: 'center',
    },
    load__title: {
        fontSize: 40,
        color: '#ffffff',
        textAlign: 'center',
    },
    load__desc: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        padding: 15
    }
});