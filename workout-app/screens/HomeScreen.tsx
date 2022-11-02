import { Text, View, Button } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useEffect } from "react";


export default function HomeScreen({ navigation }: NativeStackHeaderProps)
{
    useEffect(() =>
    {
        console.log("Rendering the planner screen");

        return () => console.log("nmounting Home Screen");
    }, []);


    return (
        <View>
            <Text>I am HomeScreen</Text>
            <Button title="Go to Planner" onPress={() => navigation.navigate("Planner")} />
        </View>
    );
};