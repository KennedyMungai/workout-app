import React, { useState, useEffect } from 'react';
import * as Font from "expo-font";


const useCachedResources = () =>
{
    const [isLoadingComplete, setisLoadingComplete] = useState<boolean>(false);

    useEffect(() =>
    {
        const loadResourcesAndDataAsync = async () =>
        {
            try
            {
                await Font.loadAsync({
                    "montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
                    "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                })
            } catch (error)
            {
                console.warn(error);
            }
        };

        loadResourcesAndDataAsync();
    }, [isLoadingComplete]);

    return isLoadingComplete;
}

export default useCachedResources;
