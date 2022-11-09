import { useState, useEffect } from "react";
import { getWorkouts } from "../storage/workout";
import { WorkOut } from "../types/data";


export const useWorkouts = () =>
{
    const [workout, setWorkout] = useState<WorkOut>();

    useEffect(() =>
    {
        async function getData()
        {
            const _workouts = await getWorkouts();
            setWorkout(_workouts);
        }

        getData();
    }, []);


    return workout;
}
