import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene, Tabs } from "react-native-router-flux";
import Home from "../screens/Home";
import Login from "../screens/Login";
import TinderApp from "../screens/tinderapp"

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene component={TinderApp} initial={true} title="tinder" />
                    <Scene component={Home} title="HOME" />
                    <Scene component={Login} title="Login" />
                </Stack>
            </Router>
        );
    }
}
