import React, { useState, useEffect } from 'react';
import * as Font from "expo-font";


const useCachedResources = () =>
{
    const [isLoadingComplete, setisLoadingComplete] = useState<boolean>(false);

    useEffect(() =>
    {
        const loadResourcesAndDataAsync = () =>
        {

        };

        loadResourcesAndDataAsync();
    }, [isLoadingComplete]);

    return isLoadingComplete;
}

export default useCachedResources;
