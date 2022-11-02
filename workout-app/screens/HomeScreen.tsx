import { Text, View, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from '../data.json';


export default function HomeScreen({ navigation }: NativeStackHeaderProps)
{
    return (
        <View style={styles.container}>
            <Text>I am HomeScreen</Text>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});