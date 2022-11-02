import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";


export default function Navigation()
{
    return (
        <NavigationContainer>

        </NavigationContainer>
    );
}


const Stack = createNativeStackNavigator();

const RootNavigator = () =>
{
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Planner" component={PlannerScreen} />
    </Stack.Navigator>
};