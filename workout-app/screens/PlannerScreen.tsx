import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Text, View, Button } from "react-native";


export default function PlannerScreen({ navigation }: NativeStackHeaderProps)
{


    return (
        <View>
            <Text>I am PlannerScreen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
};