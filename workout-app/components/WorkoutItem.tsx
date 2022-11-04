import React from 'react';
import { View, Text } from 'react-native';
import { WorkOut, Difficulty } from '../types/data';


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
