import { Text, View, Button } from "react-native";


export default function HomeScreen({ navigation })
{
    return (
        <View>
            <Text>I am HomeScreen</Text>
            <Button title="Go to Planner" onPress={() => navigation.push("Planner")} />
        </View>
    );
};