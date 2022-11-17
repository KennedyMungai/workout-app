import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { PressableText } from './styled/PressableText'


type ExerciseForm = {
    name: string,
    duration: string
}


const WorkoutForm = ({
    onSubmit
}: {
    onSubmit: () => void
}) =>
{
    const [form, setForm] = useState({
        name: "",
        duration: ""
    })

    const OnChangeText = (name: string) => (text: string) =>
    {
        setForm({
            ...form,
            [name]: text
        })
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
                    onChangeText={OnChangeText("name")}
                />
                <TextInput
                    value={form.duration}
                    style={styles.input}
                    onChangeText={OnChangeText("duration")}
                />

                <PressableText
                    text="Submit"
                    onPress={() => alert(form)}
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