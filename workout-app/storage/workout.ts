import { containsKey, storeData } from ".";

export const getWorkouts = () =>
{

};

export const initWorkouts = async () =>
{
    const hasWorkouts = await containsKey("workout-data");

    if (!hasWorkouts)
    {
        console.log("Storing the data");
        await storeData("workout-data", data);
    }
};