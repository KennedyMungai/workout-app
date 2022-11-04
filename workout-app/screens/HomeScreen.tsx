import { View, StyleSheet, FlatList, Text } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from '../data.json';
import { WorkOut } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";


export default function HomeScreen({ navigation }: NativeStackHeaderProps)
{
    return (
        <View style={styles.container}>
            <Text>New Workouts</Text>
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
        fontWeight: "bold"
    }
});