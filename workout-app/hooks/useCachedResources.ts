import React, { useState, useEffect } from 'react';
import * as Font from "expo-font";
import { getData, storeData, containsKey } from '../storage';
import data from "../data.json";
import { initWorkouts, getWorkouts } from '../storage/workout';


const useCachedResources = () =>
{
    const [isLoadingComplete, setisLoadingComplete] = useState<boolean>(false);

    useEffect(() =>
    {
        const loadResourcesAndDataAsync = async () =>
        {
            try
            {
                initWorkouts();

                await Font.loadAsync({
                    "montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
                    "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                })
            } catch (error)
            {
                console.warn(error);
            } finally
            {
                getWorkouts();
                setisLoadingComplete(true);
            }
        };

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}

export default useCachedResources;
