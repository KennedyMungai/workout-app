import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'


const WorkoutForm = () =>
{
    const [form, setForm] = useState({
        name: "",
        duration: ""
    })

    return (
        <View style={styles.container}>
            <Text>
                Exercise Form
            </Text>
            <View>
                <TextInput
                    value={form.name}
                    style={styles.input}
                />
                <TextInput
                    value={form.duration}
                    style={styles.input}
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})