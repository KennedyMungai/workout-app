import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';


export default function WorkoutDetail({ navigation }: NativeStackHeaderProps)
{
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Workout Details</Text>
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