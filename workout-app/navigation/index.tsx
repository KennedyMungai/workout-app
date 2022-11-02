import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import TestScreen from '../screens/TestScreen';
import { Text } from 'react-native';


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
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator()
{
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => <Text>Home</Text> }} />
            <BottomTab.Screen name="Planner" component={PlannerScreen} />
        </BottomTab.Navigator>
    );
};