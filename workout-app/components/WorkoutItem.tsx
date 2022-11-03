import React from 'react';
import { View, Text } from 'react-native';
import { WorkOut } from '../types/data';


const WorkoutItem = ({ item }: { item: WorkOut }) =>
{
    return (
        <View>
            <Text>{item.name} - {item.difficulty}</Text>
        </View>
    )
}

export default WorkoutItem;
