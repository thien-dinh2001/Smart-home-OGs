import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import {Component, useState} from 'react';
import { useAuth } from '../context/AuthContext'
import db from '../firebase/config'
//import firestore from '@react-native-firebase/firestore';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings Screen',
    };

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render()
    {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'}}>
                <Text>Settings</Text>

                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={() => navigate('Profile Screen', {screen: 'ProfileScreen'})}>
                    <Text style={styles.buttonText}>User</Text>
                </TouchableOpacity>


            </View>
        );
    }
};

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: "#009688",
        borderRadius: 10,
        padding: 12,
    },
    buttonText: {
        fontSize: 17,
        alignSelf: 'center',
        fontWeight: "bold",
        color: 'white'
    },
});