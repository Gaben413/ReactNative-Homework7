import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './src/screens/Home.js'

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  )
}

function HomeScreen({ navigation }) {
  return (
    <Home />
  );
}

function DetailsScreen(){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <Text>Details Screen</Text>

      <Text>itemId: </Text>
      <Text>otherParam: </Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;