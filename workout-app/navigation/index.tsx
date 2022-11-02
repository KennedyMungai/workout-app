import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";


export default function Navigation()
{
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}


const Stack = createNativeStackNavigator();

function RootNavigator()
{
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Planner" component={PlannerScreen} />
        </Stack.Navigator>
    );
};

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator()
{
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Planner" component={{ PlannerScreen }} />
        </BottomTab.Navigator>
    );
};