import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { PressableText } from './styled/PressableText'


export type ExerciseForm = {
    name: string,
    duration: string
}

type WorkoutProps = {
    onSubmit: (form: ExerciseForm) => void
}

const WorkoutForm = ({
    onSubmit
}: WorkoutProps) =>
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
                    onPress={() => onSubmit(form)}
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