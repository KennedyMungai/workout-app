import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import WorkoutForm, { ExerciseForm } from '../components/WorkoutForm';
import { SequenceItem, SequenceType } from "../types/data";


export default function PlannerScreen({ navigation }: NativeStackHeaderProps)
{
    const handleFormSubmit = (form: ExerciseForm) =>
    {
        const sequenceItem: SequenceItem = {
            slug: form.name + Date.now(),
            name: form.name,
            type: form.type as SequenceType,
            duration: Number(form.duration)
        }

        if (form.reps)
        {
            sequenceItem.reps = Number(form.reps)
        }

        console.log(sequenceItem)
    }

    return (
        <View style={styles.container}>
            <WorkoutForm
                onSubmit={handleFormSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})