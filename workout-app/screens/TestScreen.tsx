import { Text, View, Button } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useEffect } from "react";


export default function TestScreen({ navigation }: NativeStackHeaderProps)
{
    useEffect(() =>
    {
        console.log("Rendering the planner screen");

        return () => console.log("Unmounting Test Screen");
    }, []);


    return (
        <View>
            <Text>I am HomeScreen</Text>
            <Button title="Go to Planner" onPress={() => navigation.navigate("Planner")} />
        </View>
    );
};