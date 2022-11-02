import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { Text, View, Button } from "react-native";


export default function PlannerScreen({ navigation }: NativeStackHeaderProps)
{
    useEffect(() =>
    {
        console.log("Rendering the planner screen");

        return () => console.log("Unmounting the planner screen");
    }, []);


    return (
        <View>
            <Text>I am PlannerScreen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
};