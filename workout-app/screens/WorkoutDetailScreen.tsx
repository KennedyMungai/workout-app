import { View, StyleSheet, Text, Modal as DefaultModal } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import Modal from '../components/styled/Modal';
import { PressableText } from "../components/styled/PressableText";


type DetailParams = {
    route: {
        params: {
            slug: string
        }
    }
};

type Navigation = NativeStackHeaderProps & DetailParams;

export default function WorkoutDetailScreen({ route }: Navigation)
{
    const workout = useWorkoutBySlug(route.params.slug);

    if (!workout)
    {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{workout.name}</Text>
            <Modal
                activator={() =>
                    <PressableText
                        text="Check Sequence"
                        onPress={() => alert("Opening")}
                    />
                }
            />
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold",
    },
});

function useState<T>(arg0: boolean): [any, any]
{
    throw new Error("Function not implemented.");
}
