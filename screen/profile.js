import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { Component, useContext, useState, useEffect } from 'react';
import db from '../firebase/config'
//import * as firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';
import {updatePassword} from "@firebase/auth";
import AuthProvider from '../context/AuthContext'


const {user, logout} = useContext(AuthProvider);

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [deleted, setDeleted] = useState(false);
const [userData, setUserData] = useState(null);

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile Screen',
    };

    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
        }
    }

    onSignoutPress = () => {
        firebase.auth().signOut();
    }

    reauthenticate = (oldPassword) => {
        const user = firebase.auth().currentUser;
        const cred = firebase.auth.EmailAuthProvider.credential(user.email, oldPassword);
        return user.reauthenticateWithCredential(cred);
    }

    onChangePasswordPress = () => {
        this.reauthenticate(this.state.oldPassword).then(() => {
            const user = firebase.auth().currentUser;
            user.updatePassword(this.state.newPassword).then(() => {
                console.log("Password was changed")
            }).catch((error) => {
                console.log(error.message);
            });
        }).catch((error) => {
            console.log(error.message);
        });

    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'}}>
                <Text>User's Profile</Text>

                <View style = {styles.container}>
                    <Text>Change Password:</Text>
                    <TextInput style = {styles.input}
                               secureTextEntry={true}
                               placeholder = "Old Password"
                               placeholderTextColor = "#9a73ef"
                               autoCapitalize = "none"
                               value = {this.state.oldPassword}
                               onChangeText = {(text) => { this.setState({oldPassword: text}) }}
                    />

                    <TextInput style = {styles.input}
                               secureTextEntry={true}
                               placeholder = "New Password"
                               placeholderTextColor = "#9a73ef"
                               autoCapitalize = "none"
                               value = {this.state.newPassword}
                               onChangeText = {(text) => { this.setState({newPassword: text}) }}
                    />

                    <Button title="Save Password" onPress={this.onChangePasswordPress} />
                </View>

                <Button title="Sign out" onPress={this.onSignoutPress} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})
