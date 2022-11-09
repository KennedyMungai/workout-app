import { containsKey, getData, removeItem, storeData } from ".";
import data from '../data.json';
import { WorkOut } from '../types/data';


export const getWorkouts = async (): Promise<WorkOut[]> =>
{
    const workouts = await getData("workout-data");
    return workouts;
};

export const getWorkoutBySlug = async (slug: string) =>
{

}

export const initWorkouts = async (): Promise<boolean> =>
{
    const hasWorkouts = await containsKey("workout-data");

    if (!hasWorkouts)
    {
        console.log("Storing the data");
        await storeData("workout-data", data);
        return true;
    }

    return false;
};

export const clearWorkouts = async () =>
{
    await removeItem("workout-data");
};