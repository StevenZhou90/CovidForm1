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

    <NavigationContainer style={styles.nav}>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} options={{ headerStyle: {backgroundColor: '#3d4df5'} }}/>
        <Stack.Screen name="Demo" component={Demo} options={{ headerStyle: {backgroundColor: '#3d4df5'} }}/>
        <Stack.Screen name="Health" component={Health} options={{ headerStyle: {backgroundColor: '#3d4df5'} }}/>
        <Stack.Screen name="Risk" component={Risk} options={{ headerStyle: {backgroundColor: '#3d4df5'} }}/>
        <Stack.Screen name="ContactForm" component={ContactFormApp} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    backgroundColor: '#013A63',
  }
  
});

