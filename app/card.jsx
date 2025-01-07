import React from "react";

import { View, Text, StyleSheet } from "react-native";

export default function Card() {
    return (
        <View>
            <Text style ={styles.wrapper}>Card 135 000 000</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        fontSize: 40
    }
});