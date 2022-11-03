import { Text, View, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from '../data.json';
import { WorkOut } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";


export default function HomeScreen({ navigation }: NativeStackHeaderProps)
{
    const renderItem = ({ item }: { item: WorkOut }) =>
    (
        <WorkoutItem item={item} />
    );

    return (
        <View style={styles.container}>
            {/* <Text>I am HomeScreen</Text> */}
            {/* <Text>{JSON.stringify(data)}</Text> */}
            <FlatList
                data={data as WorkOut[]}
                keyExtractor={item => item.slug}
                renderItem={renderItem}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});