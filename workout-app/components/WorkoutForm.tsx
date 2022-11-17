import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'


const WorkoutForm = () =>
{
    const [form, setForm] = useState({
        name: "",
        duration: ""
    })

    const OnChangeText = (name: string) => (text: string) =>
    {
        console.log(text)
    }

    return (
        <View style={styles.container}>
            <Text>
                Exercise Form
            </Text>
            <View>
                <TextInput
                    value={form.name}
                    style={styles.input}
                    onChangeText={OnChangeText}
                />
                <TextInput
                    value={form.duration}
                    style={styles.input}
                    onChangeText={OnChangeText}
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