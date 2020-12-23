import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import Intro from "./components/intro" 
import Demo from "./components/demo" 
import Health from "./components/health"
import Risk from "./components/risk"
import ContactFormApp from './contactformapp/contactformapp'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="Health" component={Health} />
        <Stack.Screen name="Risk" component={Risk} />
        <Stack.Screen name="ContactForm" component={ContactFormApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

