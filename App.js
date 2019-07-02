import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider, } from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import storePersist from "./src/config/Store";
import Main from "./src/Main";


const persist = storePersist();

export default class App extends Component {
  render() {
    return (
      <Provider store={persist}>
        <PersistGate persistor={persist}>
           <Main/>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
