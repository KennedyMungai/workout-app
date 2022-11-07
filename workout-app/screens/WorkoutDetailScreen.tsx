import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from '../data.json';
import { WorkOut } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";


export default function HomeScreen({ navigation }: NativeStackHeaderProps)
{
    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Workouts</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold",
    }
}); 