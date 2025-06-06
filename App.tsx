import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-url-polyfill/auto';


import TitleScreen from './screens/TitleScreen';
import TestScreen from './screens/TestScreen';
import UniScreen from './screens/UniScreen';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TitleScreen">
        <Stack.Screen name="TitleScreen" component={TitleScreen}/>
        <Stack.Screen name="TestScreen" component={TestScreen}/>
        <Stack.Screen name="UniScreen" component={UniScreen} options={{headerShown : false, animation: 'slide_from_bottom'}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}