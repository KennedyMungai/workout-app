import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'


const WorkoutForm = () =>
{
    return (
        <View style={styles.container}>
            <Text>
                Exercise Form
            </Text>
        </View>
    )
}

export default WorkoutForm


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
    }
})