import { useState, useEffect } from "react";
import { getWorkoutBySlug, getWorkouts } from "../storage/workout";
import { WorkOut } from "../types/data";


export const useWorkoutBySlug = (slug: string) =>
{
    const [workout, setWorkout] = useState<WorkOut>();

    useEffect(() =>
    {
        async function getData()
        {
            const _workout = await getWorkoutBySlug(slug);
            setWorkout(_workout);
        }

        getData();
    }, []);


    return workout;
}
