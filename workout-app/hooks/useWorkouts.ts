import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { getWorkouts } from "../storage/workout";
import { WorkOut } from "../types/data";


export const useWorkouts = () =>
{
    const [workouts, setWorkouts] = useState<WorkOut[]>([]);
    const isFocused = useIsFocused();

    useEffect(() =>
    {
        async function getData()
        {
            console.log("Getting the data")
            const _workouts = await getWorkouts();
            setWorkouts(_workouts);
        }

        getData();
    }, []);


    return workouts;
}
