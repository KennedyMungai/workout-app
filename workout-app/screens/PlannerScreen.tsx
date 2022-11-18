import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, StyleSheet, FlatList, Text } from 'react-native';
import slugify from "slugify";
import ExerciseForm, { ExerciseFormData } from '../components/ExerciseForm';
import ExerciseItem from "../components/ExerciseItem";
import Modal from "../components/styled/Modal";
import { PressableText } from "../components/styled/PressableText";
import WorkoutForm from "../components/WorkoutForm";
import { SequenceItem, SequenceType } from "../types/data";
import { WorkoutFormData } from '../components/WorkoutForm';


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

    const handleWorkoutSubmit = (form: WorkoutFormData) => 
    {
        const workout = {
            name: form.name,
            slug: slugify(form.name + " " + Date.now(), { lower: true }),
        }

        console.log(workout)
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
                        <PressableText
                            style={{ marginTop: 15 }}
                            text={"Create Workout"}
                            onPress={handleOpen}
                        />
                    }
                >
                    <Text>
                        <WorkoutForm
                            onSubmit={handleWorkoutSubmit}
                        />
                    </Text>
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