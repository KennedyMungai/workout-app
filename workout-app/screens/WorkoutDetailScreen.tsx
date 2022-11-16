import { View, StyleSheet, Text, Modal as DefaultModal } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import Modal from '../components/styled/Modal';
import { PressableText } from "../components/styled/PressableText";
import { formatSec } from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";
import WorkoutItem from "../components/WorkoutItem";
import { SequenceItem } from '../types/data';
import { useEffect, useState } from "react";
import { useCountDown } from '../hooks/useCountDown';


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
    const [sequence, setSequence] = useState<SequenceItem[]>([]);
    const [trackerIdx, setTrackerIdx] = useState<number>(-1)

    const workout = useWorkoutBySlug(route.params.slug);


    const { countDown, isRunning, stop, start } = useCountDown(
        trackerIdx,
        trackerIdx >= 0 ?
            sequence[trackerIdx].duration :
            -1
    )

    const hasReachedEnd: boolean =
        sequence.length === workout!.sequence.length &&
        countDown === 0

    useEffect(() =>
    {
        if (!workout)
        {
            return
        }

        if (trackerIdx === workout.sequence.length - 1)
        {
            return
        }

        if (countDown === 10)
        {
            stop()
        }

        if (countDown === 0)
        {
            addItemToSequence(trackerIdx + 1)
        }
    }, [countDown])


    const addItemToSequence = (idx: number) =>
    {
        const newSequence = [...sequence, workout!.sequence[idx]]
        setSequence(newSequence);
        setTrackerIdx(idx)
        start(newSequence[idx].duration)
    }

    if (!workout)
    {
        return null;
    }

    return (
        <View style={styles.container}>
            <WorkoutItem
                item={workout}
                childStyles={{ marginTop: 10 }}
            >
                <Modal
                    activator={({ handleOpen }) =>
                        <PressableText
                            onPress={handleOpen}
                            text="Check Sequence"
                        />
                    }
                >
                    <View>
                        {
                            workout.sequence.map((si, idx) => (
                                <View
                                    key={si.slug}
                                    style={styles.sequenceItem}
                                >
                                    <Text>
                                        {si.name} | {si.type} | {formatSec(si.duration)}
                                    </Text>
                                    {
                                        idx !== workout.sequence.length - 1 &&
                                        < FontAwesome
                                            name="arrow-down"
                                            size={20}
                                        />
                                    }
                                </View>
                            ))
                        }
                    </View>
                </Modal>
            </WorkoutItem>

            <View style={styles.counterUI}>
                {
                    sequence.length === 0 ?
                        <FontAwesome
                            name="play-circle-o"
                            size={100}
                            onPress={() => addItemToSequence(0)}
                        />
                        :
                        isRunning
                            ?
                            <FontAwesome
                                name="stop-circle-o"
                                size={100}
                                onPress={() => stop()}
                            />
                            :
                            <FontAwesome
                                name="play-circle-o"
                                size={100}
                                onPress={() =>
                                {
                                    if (hasReachedEnd)
                                    {
                                        console.log("Restart counter")
                                    }
                                    else 
                                    {
                                        start(countDown)
                                    }

                                    start(countDown)
                                }}
                            />
                }
                {
                    sequence.length > 0 && countDown >= 0 &&
                    <View>
                        <Text style={styles.countDown}>
                            {countDown}
                        </Text>
                    </View>
                }
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 60, fontWeight: "bold" }}>
                    {
                        sequence.length === 0 ?
                            "Prepare" :
                            hasReachedEnd ?
                                "Great Job" :
                                sequence[trackerIdx].name
                    }
                </Text>
            </View>
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
    },
    countDown: {
        fontSize: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20
    },
    counterUI: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 20
    },
    counterItem: {
        flex: 1,
        alignItems: "center",
    }
});