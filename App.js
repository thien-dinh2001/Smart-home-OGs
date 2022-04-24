import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LightScreen from './screen/light';
import NotificationsScreen from './screen/notification';
import SettingsScreen from './screen/settings';
import Home from './screen/home';
import { NavigationContainer } from '@react-navigation/native';
import AlarmScreen from './screen/alarm';
import LoginScreen from './screen/login';
import SignupScreen from './screen/signup';
import AuthProvider from './context/AuthContext';
import Aircon from './screen/aircon';
import Door from './screen/door';
import DoorPass from './screen/doorPass';

const Stack = createStackNavigator();

export default function App()
{
    return (
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator>
                    <Stack.Screen
                        name={'Login Screen'}
                        component={LoginScreen}
                        options={{ headerShown: false }}>
                    </Stack.Screen>
                    <Stack.Screen
                        name={'Home Screen'}
                        component={Home}
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
                        name={'Signup Screen'}
                        component={SignupScreen}
                        options={{ headerShown: false }}>
                    </Stack.Screen>
                    <Stack.Screen
                        name={'Aircon Screen'}
                        component={Aircon}
                        options={{ headerShown: false }}>
                    </Stack.Screen>
                    <Stack.Screen
                        name={'Door Screen'}
                        component={Door}
                        options={{ headerShown: false }}>
                    </Stack.Screen>
                    <Stack.Screen
                        name={'DoorPass Screen'}
                        component={DoorPass}
                        options={{ headerShown: false }}>
                    </Stack.Screen>
                </Stack.Navigator>
            </AuthProvider>  
        </NavigationContainer>   
    );
}