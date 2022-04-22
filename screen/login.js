import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Ionicons} from '@expo/vector-icons';

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
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [secure, setSecure] = useState(true);
  const { loginwithPassword, loginwithGoogle, error, setError } = useAuth();
  const [loading, setLoading] = useState(false);
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
        <TextInput 
          style={{padding: 12, paddingVertical: 10, paddingHorizontal: 12, backgroundColor: 'white', borderRadius: 7, margin: 10}}
          placeholder='Email'
          onChangeText={ text => setEmail(text)}
          keyboardType='email-address'>
        </TextInput>
        <View style={styles.passwordContainter}>
          <TextInput 
            style={{}}
            placeholder='Password'
            secureTextEntry={secure}
            onChangeText={ text => setPassword(text) }>
          </TextInput>
          <Ionicons
            onPress={() => setSecure(!secure)}
            name={secure ? 'eye-off-outline' : 'eye-outline'} 
            size={20}
            style={{alignSelf: 'center'}}
          />
        </View>
      <AppButton 
        icon="sign-in" 
        title="Login with Password" 
        backgroundColor="gray" 
        //onPress={() => navigation.navigate('Auth Screen', {screen: 'AuthenticationScreen'})}
        onPress={handleClick}
        />
      {/*<AppButton icon="facebook" title="Login with Facebook" backgroundColor="#3b5998"/>
      <AppButton icon="github" title="Login with Gmail" backgroundColor="#14191e"/>*/}
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
  passwordContainter: {
    flexDirection: 'row', 
    padding: 12, 
    paddingVertical: 10, 
    paddingHorizontal: 12, 
    backgroundColor: 'white', 
    borderRadius: 7, 
    margin: 10,
    justifyContent: 'space-between',
  }
});

export default LoginScreen;