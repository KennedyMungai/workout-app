import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { getWorkouts } from "../storage/workout";
import { WorkOut } from "../types/data";


export const useWorkouts = () =>
{
    const [workouts, setWorkouts] = useState<WorkOut[]>([]);
    const isFocused = useIsFocused();

    console.log(isFocused)

    useEffect(() =>
    {
        async function getData()
        {
            const _workouts = await getWorkouts();
            setWorkouts(_workouts);
        }

        if (isFocused)
        {
            getData();
        }
    }, [isFocused]);


    return workouts;
}
