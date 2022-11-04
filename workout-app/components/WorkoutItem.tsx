import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WorkOut } from '../types/data';


const WorkoutItem = ({ item }: { item: WorkOut }) =>
{
    return (
        <View>
            <Text>Name: {item.name}</Text>
            <Text>Duration: {item.duration}</Text>
            <Text>Difficulty: {item.difficulty}</Text>
        </View>
    )
}

export default WorkoutItem;


const styles = StyleSheet.create({
    container: {

    },
    name: {

    },
    duration: {

    },
    difficulty: {

    }
});