import { useState, useEffect } from "react";
import { getWorkoutBySlug, getWorkouts } from "../storage/workout";
import { WorkOut } from "../types/data";


export const useWorkouts = () =>
{
    const [workout, setWorkout] = useState<WorkOut>();

    useEffect(() =>
    {
        async function getData()
        {
            const _workout = await getWorkoutBySlug();
            setWorkout(_workouts);
        }

        getData();
    }, []);


    return workout;
}
