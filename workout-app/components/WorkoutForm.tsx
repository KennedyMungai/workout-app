import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
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
    const { control, handleSubmit } = useForm();

    return (
        <View style={styles.container}>
            <Text>
                Exercise Form
            </Text>
            <View>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    name="name"
                    render={({ field: { onChange, value } }) =>
                        <TextInput
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                        />
                    }
                />
                <PressableText
                    text="Submit"
                    onPress={handleSubmit((data) =>
                    {
                        console.log(data)
                    })}
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
        borderRadius: 10,
    },
})