import { View, StyleSheet, Text, Modal } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
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
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const workout = useWorkoutBySlug(route.params.slug);

    if (!workout)
    {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{workout?.name}</Text>
            <PressableText
                onPress={() => setIsModalVisible(true)}
                text="Check Sequence"
            />
            <Modal
                visible={isModalVisible}
                transparent={false}
                animationType="none"
            >
                <Text>
                    Hello There!
                </Text>
            </Modal>
        </View>
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
    }
});

function useState<T>(arg0: boolean): [any, any]
{
    throw new Error("Function not implemented.");
}
