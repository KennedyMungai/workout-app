import { Text, View } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from '../data.json';


export default function HomeScreen({ navigation }: NativeStackHeaderProps)
{
    return (
        <View>
            <Text>I am HomeScreen</Text>
        </View>
    );
};