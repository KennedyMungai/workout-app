import React from 'react';
import { View, Text } from 'react-native';
import { WorkOut } from '../types/data';


const WorkoutItem = ({ item }: { item: WorkOut }) =>
{
    return (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.duration}</Text>
            <Text>{item.difficulty}</Text>
        </View>
    )
}

export default WorkoutItem;
