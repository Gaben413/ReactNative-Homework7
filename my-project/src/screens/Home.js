import { Button, StyleSheet, Text, View } from 'react-native';

export function Home(){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="CHECK" />
        </View>
    )
}