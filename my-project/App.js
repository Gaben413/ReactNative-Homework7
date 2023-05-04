import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'Qualquer outra coisa',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({route, navigation}){

  const {itemId, otherParam} = route.params;

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <Text>Details Screen</Text>

      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen  name="Home" component={HomeScreen}/>
        <Stack.Screen  name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;