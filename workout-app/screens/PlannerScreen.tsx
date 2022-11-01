import { useEffect } from "react";
import { Text, View, Button } from "react-native";


export default function PlannerScreen({ navigation })
{
    useEffect(() =>
    {
        console.log("Rendering the planner screen")
    }, []);


    return (
        <View>
            <Text>I am PlannerScreen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
};