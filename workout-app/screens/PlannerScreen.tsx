import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, StyleSheet, FlatList, Text } from 'react-native';
import slugify from "slugify";
import ExerciseForm, { ExerciseFormData } from '../components/ExerciseForm';
import ExerciseItem from "../components/ExerciseItem";
import Modal from "../components/styled/Modal";
import { PressableText } from "../components/styled/PressableText";
import WorkoutForm from "../components/WorkoutForm";
import { SequenceItem, SequenceType, WorkOut } from "../types/data";
import { WorkoutFormData } from '../components/WorkoutForm';
import { storeWorkout } from "../storage/workout";
import PressableThemeText from '../components/styled/PressableThemeText';


export default function PlannerScreen({ navigation }: NativeStackHeaderProps)
{
    const [seqItems, setSeqItems] = useState<SequenceItem[]>([])

    const handleExerciseSubmit = (form: ExerciseFormData) =>
    {
        const sequenceItem: SequenceItem = {
            slug: slugify(form.name + " " + Date.now(), { lower: true }),
            name: form.name,
            type: form.type as SequenceType,
            duration: Number(form.duration)
        }

        if (form.reps)
        {
            sequenceItem.reps = Number(form.reps)
        }

        setSeqItems([...seqItems, sequenceItem])
    }

    const computeDifficulty = (exercisesCount: number, workoutDuration: number) =>
    {
        const intensity = workoutDuration / exercisesCount

        if (intensity < 60)
        {
            return "hard"
        }
        else if (intensity <= 100)
        {
            return "normal"
        }
        else
        {
            return "easy"
        }
    }

    const handleWorkoutSubmit = (form: WorkoutFormData) => 
    {
        const duration = seqItems.reduce((acc, item) =>
        {
            return acc + item.duration
        }, 0)

        if (seqItems.length > 0)
        {
            const workout: WorkOut = {
                name: form.name,
                slug: slugify(form.name + " " + Date.now(), { lower: true }),
                duration: duration,
                difficulty: computeDifficulty(seqItems.length, duration),
                sequence: [...seqItems],
            }

            storeWorkout(workout)
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={seqItems}
                keyExtractor={item => item.slug}
                renderItem={({ item, index }) =>
                    <ExerciseItem item={item}>
                        <PressableText
                            text="Remove"
                            onPressIn={() =>
                            {
                                const items = [...seqItems]
                                items.splice(index, 1)
                                setSeqItems(items)
                            }}
                        />
                    </ExerciseItem>
                }
            />
            <ExerciseForm
                onSubmit={handleExerciseSubmit}
            />
            <View>
                <Modal
                    activator={({ handleOpen }) =>
                        <PressableThemeText
                            style={{ marginTop: 15 }}
                            text={"Create Workout"}
                            onPress={handleOpen}
                        />
                    }
                >

                    {
                        ({ handleClose }) =>
                            <Text>
                                <WorkoutForm
                                    onSubmit={async (data) =>
                                    {
                                        await handleWorkoutSubmit(data)
                                        handleClose()
                                        navigation.navigate("Home")
                                    }}
                                />
                            </Text>
                    }
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})