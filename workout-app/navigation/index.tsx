import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { FontAwesome } from "@expo/vector-icons";
import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";
import { ColorSchemeName } from "react-native";


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName })
{
    return (
        <NavigationContainer
            theme={colorScheme === "light" ? DefaultTheme : DarkTheme}
        >
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
            <Stack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} options={{ title: "Workout Info" }} />
        </Stack.Navigator>
    );
};

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator()
{
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} />
                }}
            />
            <BottomTab.Screen
                name="Planner"
                component={PlannerScreen}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ color, size }) => <FontAwesome name="list" size={size} color={color} />
                }}
            />
        </BottomTab.Navigator>
    );
};