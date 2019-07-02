import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {Router, Stack,Scene,Tabs} from "react-native-router-flux";
import Home from "../screens/Home";
import Login from "../screens/Login";


export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                <Scene component={Login} initial={true} title="Login"/>
                    <Scene component={Home} title="HOME"/>
                </Stack>
            </Router>
        );
    }
}
