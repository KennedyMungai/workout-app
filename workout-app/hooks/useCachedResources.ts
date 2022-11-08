import React, { useState, useEffect } from 'react';
import * as Font from "expo-font";
import { getData, storeData, containsKey } from '../storage';
import data from "../data.json";


const useCachedResources = () =>
{
    const [isLoadingComplete, setisLoadingComplete] = useState<boolean>(false);

    useEffect(() =>
    {
        const loadResourcesAndDataAsync = async () =>
        {
            try
            {
                await storeData("workout-data", data);

                await Font.loadAsync({
                    "montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
                    "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                })
            } catch (error)
            {
                console.warn(error);
            } finally
            {
                const workouts = await getData("workout-data");
                setisLoadingComplete(true);
            }
        };

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}

export default useCachedResources;
