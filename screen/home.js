import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native';
import Tabs from '../components/navigation';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button title='Click me' onPress={() => navigation.navigate('Alarm Screen', {screen: 'AlarmScreen'})}/>
        <Button title='light' onPress={() => navigation.navigate('Light Screen', {screen: 'LightScreen'})}/>
        <Button title='signin' onPress={() => navigation.navigate('Login Screen', {screen: 'LoginScreen'})}/>
      </View>
    );
}

export default HomeScreen;