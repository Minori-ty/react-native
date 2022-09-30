import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Home from './components/Home';
import About from './components/About';
import Book from './components/Book';

import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="About"f
          component={About}
          options={{
            title: '关于',
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
      </Stack.Navigator> */}
      {/* <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName = '';
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Book':
                iconName = 'book';
                break;
              case 'About':
                iconName = 'person';
                break;
              default:
                break;
            }
            return <Ionicons name={iconName} color={color} size={20} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} options={{title: '首页'}} />
        <Tab.Screen name="Book" component={Book} options={{title: '漫画'}} />
        <Tab.Screen name="About" component={About} options={{title: '我的'}} />
      </Tab.Navigator> */}
      <Tab.Navigator
        style={[sheet.App]}
        tabBarPosition="bottom"
        screenOptions={{
          tabBarActiveTintColor: '#0960BD',
          tabBarInactiveTintColor: '#666',
          tabBarShowIcon: true,
          tabBarScrollEnabled: false,
          tabBarStyle: {
            // paddingBottom: 10,
            // height: 60,
            display: 'flex',
            justifyContent: 'center',
          },
          tabBarLabelStyle: {
            // fontSize: 16,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: '首页',
            tabBarIcon: ({focused, color}) => {
              return <Ionicons name="home" color={color} size={20} />;
            },
          }}
        />
        <Tab.Screen
          name="Book"
          component={Book}
          options={{
            title: '漫画',
            tabBarIcon: ({focused, color}) => {
              return <Ionicons name="book" color={color} size={20} />;
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            title: '我的',
            tabBarIcon: ({focused, color}) => {
              return <Ionicons name="person" color={color} size={20} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const sheet = StyleSheet.create({
  App: {
    backgroundColor: '#fff',
  },
});
