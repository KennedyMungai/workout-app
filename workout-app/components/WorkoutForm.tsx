import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { PressableText } from './styled/PressableText'


export type WorkoutFormData = {
    name: string,
}

type WorkoutProps = {
    onSubmit: (form: WorkoutFormData) => void
}

const WorkoutForm = ({
    onSubmit
}: WorkoutProps) =>
{
    const { control, handleSubmit } = useForm();

    return (
        <View style={styles.container}>
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
                        placeholder="Workout Name"
                        style={styles.input}
                    />
                }
            />
            <PressableText
                style={{ marginTop: 10 }}
                text="Add Exercise"
                onPress={handleSubmit((data) =>
                {
                    onSubmit(data as WorkoutFormData)
                })}
            />
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
        flex: 1,
        height: 30,
        margin: 2,
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        borderColor: "rgba(0,0,0,0.4)"
    },
})