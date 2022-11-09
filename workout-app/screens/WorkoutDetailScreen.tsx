import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { getWorkoutBySlug } from "../storage/workout";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";


type DetailParams = {
    route: {
        params: {
            slug: string
        }
    }
};

type Navigation = NativeStackHeaderProps & DetailParams;

export default function WorkoutDetailScreen({ route }: Navigation)
{
    const workout = useWorkoutBySlug();

    return (
        <View style={styles.container}>
            <Text style={styles.header}></Text>
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