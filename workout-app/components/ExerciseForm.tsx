import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { PressableText } from './styled/PressableText'


export type ExerciseFormData = {
    name: string,
    duration: string,
    type: string,
    reps?: string,
}

type WorkoutProps = {
    onSubmit: (form: ExerciseFormData) => void
}

const selectionItems = ["exercise", "break", "stretch"]

const ExerciseForm = ({
    onSubmit
}: WorkoutProps) =>
{
    const [isSelectionOn, setIsSelectionOn] = useState<boolean>(false)

    const { control, handleSubmit } = useForm();

    return (
        <View style={styles.container}>
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
                            <View style={{ flex: 1 }}>
                                {
                                    isSelectionOn ?
                                        <View>
                                            {
                                                selectionItems.map(selection =>
                                                    <PressableText
                                                        key={selection}
                                                        text={selection}
                                                        style={styles.selection}
                                                        onPressIn={() =>
                                                        {
                                                            onChange(selection)
                                                            setIsSelectionOn(false)
                                                        }}
                                                    />
                                                )
                                            }
                                        </View>
                                        :
                                        <TextInput
                                            onPressIn={() => setIsSelectionOn(true)}
                                            placeholder="Type"
                                            style={styles.input}
                                            value={value}
                                        />
                                }
                            </View>
                        }
                    />
                </View>
                <PressableText
                    text="Submit"
                    onPress={handleSubmit((data) =>
                    {
                        onSubmit(data as ExerciseFormData)
                    })}
                />
            </View>
        </View>
    )
}

export default ExerciseForm


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
    },
    selection: {
        margin: 2,
        padding: 3,
        alignSelf: "center"
    }
})