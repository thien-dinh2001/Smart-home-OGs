import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LightScreen from './screen/light';
import NotificationsScreen from './screen/notification';
import SettingsScreen from './screen/settings';
import HomeScreen from './screen/home';
import { NavigationContainer } from '@react-navigation/native';
import { Button, View } from 'react-native-web';
import AlarmScreen from './screen/alarm';
import LoginScreen from './screen/login';
import AuthenticationScreen from './screen/authentication';

const Stack = createStackNavigator();

export default function App()
{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Home Screen'}
                    component={HomeScreen}
                    options={{ headerShown: false }}> 
                </Stack.Screen>
                <Stack.Screen
                    name={'Setting Screen'}
                    component={SettingsScreen}
                    options={{ headerShown: false }}>
                </Stack.Screen>
                <Stack.Screen
                    name={'Notification Screen'}
                    component={NotificationsScreen}
                    options={{ headerShown: false }}>
                </Stack.Screen>
                <Stack.Screen
                    name={'Light Screen'}
                    component={LightScreen}
                    options={{ headerShown: false }}>
                </Stack.Screen>
                <Stack.Screen
                    name={'Alarm Screen'}
                    component={AlarmScreen}
                    options={{ headerShown: true }}>
                </Stack.Screen>
                <Stack.Screen
                    name={'Login Screen'}
                    component={LoginScreen}
                    options={{ headerShown: false }}>
                </Stack.Screen>
                <Stack.Screen
                    name={'Auth Screen'}
                    component={AuthenticationScreen}
                    options={{ headerShown: false }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>       
    );
}