import { Text, View, Button } from "react-native";


export default function PlannerScreen({ navigation })
{
    return (
        <View>
            <Text>I am PlannerScreen</Text>
            <Button title="Go to Home" onPress={() => navigation.push("Home")} />
        </View>
    );
};