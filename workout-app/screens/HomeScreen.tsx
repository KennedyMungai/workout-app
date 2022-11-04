import { View, StyleSheet, FlatList, Text } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from '../data.json';
import { WorkOut } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import MontserratText from "../components/styled/MontserratText";


export default function HomeScreen({ navigation }: NativeStackHeaderProps)
{
    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Workouts</Text>
            <MontserratText>New Workouts</MontserratText>
            <FlatList
                data={data as WorkOut[]}
                keyExtractor={item => item.slug}
                renderItem={WorkoutItem}
            />
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
        fontFamily: "montserrat-bold",
    }
}); 