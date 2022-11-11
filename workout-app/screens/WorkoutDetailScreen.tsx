import { View, StyleSheet, Text, Modal as DefaultModal } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import Modal from '../components/styled/Modal';
import { PressableText } from "../components/styled/PressableText";
import { formatSec } from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";


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
                activator={({ handleOpen }) =>
                    <PressableText
                        onPress={handleOpen}
                        text="Check Sequence"
                    />
                }
            >
                <View style={styles.sequenceItem}>
                    {
                        workout.sequence.map(si => (
                            <View key={si.slug}>
                                <Text>
                                    {si.name} | {si.type} | {formatSec(si.duration)}
                                </Text>
                                <FontAwesome
                                    name="arrow-down"
                                    size={20}
                                />
                            </View>
                        ))
                    }
                </View>
            </Modal>
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
    sequenceItem: {
        alignItems: "center",

    }
});

function useState<T>(arg0: boolean): [any, any]
{
    throw new Error("Function not implemented.");
}
