import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { RadialGradient } from 'react-native-gradients';
import MyCards from "./myCards";


export default function App() {
    const colorList = [
        {offset: '50%', color: '#3fd2eb', opacity: '1'},
        {offset: '100%', color: '#42fc7b', opacity: '1'}
      ]
      const colorList2 = [
        {offset: '50%', color: '#ffffff', opacity: '0.2'},
        {offset: '100%', color: '#000000', opacity: '0.2'}
      ]
    return (
        <View style={styles.wrapper}>
            
            <View style={styles.c_1}>
                <RadialGradient  x="20%" y="90%" rx="50%" ry="50%" colorList={colorList}/>
            </View>
            <View style={styles.c_2}>
                <RadialGradient  x="20%" y="90%" rx="50%" ry="50%" colorList={colorList}/>
            </View>
            <View style={styles.c_3}>
                <RadialGradient  x="20%" y="90%" rx="50%" ry="50%" colorList={colorList}/>
            </View>
            <View style={styles.c_4}>
                <RadialGradient  x="20%" y="90%" rx="50%" ry="50%" colorList={colorList}/>
            </View>
            <View style={styles.c_5}>
                <Text style={styles.title_VISA}>VISA</Text>
                <Text style={styles.title_number}>2341 4435 4333 9842</Text>
                <Text style={styles.title_name}>Ivanov Daniil</Text>
            </View>

            
            <View style={styles.bottom_containter}>
                <Text style={{color:"#ffffff", fontSize: 45, marginBottom: 20}}>Transforming the Way You Pay</Text>
                <Text style={{color:"#ffffff", fontSize: 20}}>Revolutionize uoue finances with smarter, faster, and safer payment options</Text>   
            </View>

            <View style={styles.bottom_button}>
                <Text style={styles.button_text}>Welcom!</Text>
                <Text  style={styles.button}> 
                     <Text style={{position: 'absolute', left: 15, top: -5, fontSize: 40}}>{'\>'}</Text>    
                 </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button_text: {
        width: "60%",
        height: '100%',
        fontSize: 15,
        color: "#42fc7b",
        marginLeft: 10,
        marginTop: 18,
        justifyContent: 'center'
    },
    button: {
        display: "flex",
        position: "absolute",
        right: 5,
        top: 2.5,
        width: 50,
        height: 50,
        backgroundColor: "#42fc7b",
        borderRadius: 50,
    },

    bottom_button: {
        display: 'flex',
        position: 'absolute',
        flexDirection: 'row',
        bottom: 15,
        width: "100%",
        height: 60,
        backgroundColor: "#242424",
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#2d2d2d'
    },

    bottom_containter: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 300,
        backgroundColor: "#000000",
        opacity: 0.5
    },

    wrapper: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        
    },

    title_VISA: {
        margin: 20,
        color: '#ffffff',
        fontSize: 50,
        fontWeight:'bold',
    },

    title_number: {
        margin: 20,
        color: '#ffffff',
        fontSize: 25,
    },
   
    title_name: {
        marginLeft: 20,
        marginTop: 100,
        color: '#42fc7b',
        fontSize: 18,
    },

    c_1: {
        position: 'absolute',
        top: 60,
        left: 40,
        width: 400,
        height: 345,
        backgroundColor: '#42fc7b',
        transform: 'rotateX(-50deg) rotateY(-20deg)',
        borderRadius: 20,
        boxShadow: '-10px 25px 10px 10px rgba(63, 210, 235, 0.6)',
        opacity: 0.2,
        overflow:'hidden'
    },

    c_2: {
        position: 'absolute',
        top: 45,
        left: 55,
        width: 400,
        height: 345,
        backgroundColor: '#3fd2eb',
        transform: 'rotateX(-50deg) rotateY(-20deg)',
        borderRadius: 20,
        opacity: 0.4,
        boxShadow: '-10px 25px 10px 10px rgba(63, 210, 235, 0.6)',
        overflow:'hidden'
    },

    c_3: {
        position: 'absolute',
        top: 30,
        left: 70,
        width: 400,
        height: 345,
        backgroundColor: '#42fc7b',
        transform: 'rotateX(-50deg) rotateY(-20deg)',
        borderRadius: 20,
        boxShadow: '-10px 25px 10px 10px rgba(63, 210, 235, 0.6)',
        opacity: 0.6,
        overflow:'hidden'
    },

    c_4: {
        position: 'absolute',
        top: 15,
        left: 85,
        width: 400,
        height: 345,
        backgroundColor: '#3fd2eb',
        transform: 'rotateX(-50deg) rotateY(-20deg)',
        borderRadius: 20,
        boxShadow: '-10px 25px 10px 10px rgba(63, 210, 235, 0.6)',
        opacity: 0.7,
        overflow:'hidden'
    }, 

    c_5: {
        position: 'absolute',
        top: 0,
        left: 100,
        width: 400,
        height: 345,
        backgroundColor: '#3b4940',
        transform: 'rotateX(-50deg) rotateY(-20deg)',
        borderRadius: 20,
        boxShadow: '-10px 25px 10px 10px rgba(63, 210, 235, 0.6)',
        opacity: 0.8,        
    },     
});

// #42fc7b
// #3fd2eb
// #3b4940
