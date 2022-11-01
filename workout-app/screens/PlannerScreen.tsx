import { Text, View, Button } from "react-native";


export default function PlannerScreen()
{
    return (
        <View>
            <Text>I am PlannerScreen</Text>
            <Button title="Go to Planner" onPress={() => alert("Go to planner")} />
        </View>
    );
};