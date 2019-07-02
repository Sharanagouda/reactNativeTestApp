import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./config/Routes";


export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Routes/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
 
});
