import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

mport React, { Component } from 'react';
import './App.css';
import List from './List';


export default class App extends React.Component {
    constructor(props)
    {
    }
    onSubmit = (event) =>
    {
    }
    onChange = (event) =>
    {
        var result = event.target.value; 
        alert('Result of change: ' + result);
    }
    render() {
        return (
                <View style={styles.container}>
                
                  <Text>Open up App.js to start working on your app!</Text>
                  <div>
                    <form className="App" onSubmit={this.onSubmit}>
                      <input value={this.state.term} onChange={this.onChange} />
                      <button>Submit</button>
                    </form>
                    //<List items={this.state.items} />
                  </div>
                  <Text>Changes you make will automatically reload.</Text>
                  <Text>Shake your phone to open the developer menu.</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stickyNote: {
        border: 1px solid rgb(255,0,0);
        border-radius: 5px;
    },
