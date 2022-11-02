import { Text, View, Button } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';


export default function HomeScreen({ navigation }: NativeStackHeaderProps)
{
    return (
        <View>
            <Text>I am HomeScreen</Text>
            <Button title="Go to Planner" onPress={() => navigation.push("Planner")} />
        </View>
    );
};