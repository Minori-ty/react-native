import {View, Text, Button} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Novel from './Novel';
import Author from './Author';

const Stack = createStackNavigator();

export default function Book() {
  return (
    <Stack.Navigator
      initialRouteName="novel"
      screenOptions={{title: 'none'}}
      headerMode="none">
      <Stack.Screen name="novel" component={Novel} />
      <Stack.Screen name="author" component={Author} />
    </Stack.Navigator>
  );
}
