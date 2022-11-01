import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";


const Stack = createNativeStackNavigator();


export default function Navigation()
{
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
            />
            <Stack.Screen
                name="Planner"
            />
        </Stack.Navigator>
    </NavigationContainer>
};