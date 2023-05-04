import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function Welcome({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="CHECK"
                onPress={() => {
                    navigation.navigate('Details', {
                        x: 86,
                        y: 99,
                    })
                }}
            />
        </View>
    )
}

function Details({route, navigation}){
    const {x, y} = route.params;

    return(
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text>Details</Text>

            <Text>X: {x}</Text>
            <Text>Y: {y}</Text>
        </View>
    )
}

export function Home(){
    return(
        
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        
    )
}