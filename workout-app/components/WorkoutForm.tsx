import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { PressableText } from './styled/PressableText'


export type ExerciseForm = {
    name: string,
    duration: string,
    type: string,
    reps?: string,
}

type WorkoutProps = {
    onSubmit: (form: ExerciseForm) => void
}

const WorkoutForm = ({
    onSubmit
}: WorkoutProps) =>
{
    const [isSelectionOn, setIsSelectionOn] = useState<boolean>(false)

    const { control, handleSubmit } = useForm();

    return (
        <View style={styles.container}>
            <Text>
                Exercise Form
            </Text>
            <View>
                <View style={styles.rowContainer}>
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
                                placeholder="Name"
                                style={styles.input}
                            />
                        }
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true
                        }}
                        name="Duration"
                        render={({ field: { onChange, value } }) =>
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                placeholder="Duration"
                                style={styles.input}
                            />
                        }
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Controller
                        control={control}
                        rules={{
                            required: false
                        }}
                        name="reps"
                        render={({ field: { onChange, value } }) =>
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                placeholder="Repetitions"
                                style={styles.input}
                            />
                        }
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: false
                        }}
                        name="type"
                        render={({ field: { onChange, value } }) =>
                            <View>
                                <TextInput
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="Type"
                                    style={styles.input}
                                />
                            </View>
                        }
                    />
                </View>
                <PressableText
                    text="Submit"
                    onPress={handleSubmit((data) =>
                    {
                        onSubmit(data as ExerciseForm)
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
        flex: 1,
        height: 30,
        margin: 2,
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        borderColor: "rgba(0,0,0,0.4)"
    },
    rowContainer: {
        flexDirection: "row",
    }
})