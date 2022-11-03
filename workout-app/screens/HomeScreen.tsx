import { Text, View, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from '../data.json';


export default function HomeScreen({ navigation }: NativeStackHeaderProps)
{
    const renderItem = ({ item }: { item: any }) =>
    (
        <View>
            <Text>{item.name} - {item.difficulty}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* <Text>I am HomeScreen</Text> */}
            {/* <Text>{JSON.stringify(data)}</Text> */}
            <FlatList
                data={data}
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