import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

const AppButton = ({ onPress, icon, title, backgroundColor }) => (
  <View style={styles.appButtonContainer}>
    <Icon.Button
      name={icon}
      backgroundColor={backgroundColor}
      onPress={onPress}
      style={styles.appButton}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </Icon.Button>
  </View>
);


const LoginScreen = ({navigation}) => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  })
  const { login, error, setError } = useAuth();
  const [loading ,setLoading] = useState(false);
  const handleClick = async () => {
    try {
        setLoading(true)
        await loginwithPassword(email, password)
    } catch (e) {
        // setError('Invalid email or password')
        console.log('Login error:', e.message);
    }
    setLoading(false)
  }
  return (
    <View style={styles.screenContainer}>
      <View style={{}}>
        <TextInput 
          style={{padding: 12, paddingVertical: 10, paddingHorizontal: 12, backgroundColor: 'white', borderRadius: 7, margin: 10}}
          placeholder='Email'>
        </TextInput>
        <TextInput 
          style={{padding: 12, paddingVertical: 10, paddingHorizontal: 12, backgroundColor: 'white', borderRadius: 7, margin: 10}}
          placeholder='Password'>
        </TextInput>
      </View>
      <AppButton 
        icon="sign-in" 
        title="Login with Password" 
        backgroundColor="gray" 
        //onPress={() => navigation.navigate('Auth Screen', {screen: 'AuthenticationScreen'})}
        />
      <AppButton icon="facebook" title="Login with Facebook" backgroundColor="#3b5998"/>
      <AppButton icon="github" title="Login with Gmail" backgroundColor="#14191e"/>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 80,
    backgroundColor: "#555",
  },
  appButton: {
    padding: 12,
  },
  appButtonText: {
    fontSize: 17,
  },
  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default LoginScreen;