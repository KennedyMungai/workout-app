import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'


const WorkoutForm = () =>
{
    const [form, setForm] = useState({
        name: "",
        duration: 0
    })

    return (
        <View style={styles.container}>
            <Text>
                Exercise Form
            </Text>
            <View>
                <TextInput

                />
            </View>
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