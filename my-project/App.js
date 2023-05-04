import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';

import { Home } from './src/screens/Home.js'
import { Feed } from './src/screens/Feed.js'
import { Profile } from './src/screens/Profile.js'
import { Settings } from './src/screens/Settings.js'

function HomeScreen() {
  return (
    <Home />
  );
}

function FeedScreen(){
  return(
    <Feed />
  )
}

function ProfileScreen(){
  return(
    <Profile />
  )
}

function SettingsScreen(){
  return(
    <Settings />
  )
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarLabel: 'Home', tabBarIcon: () => (
            <Entypo name="home" color="black" size={24} />
          )}}
        />
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{tabBarLabel: 'Home', tabBarIcon: () => (
            <Entypo name="news" color="black" size={24} />
          )}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{tabBarLabel: 'Home', tabBarIcon: () => (
            <Entypo name="user" color="black" size={24} />
          )}}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{tabBarLabel: 'Home', tabBarIcon: () => (
            <Entypo name="cog" color="black" size={24} />
          )}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;