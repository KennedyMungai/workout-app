import React, { useState, useEffect } from 'react';


const useCachedResources = () =>
{
    const [isLoadingComplete, setisLoadingComplete] = useState<boolean>(false);

    useEffect(() =>
    {
        console.log("The useEffect hook executed");

        const loadResourcesAndDataAsync = () =>
        {
            setTimeout(() =>
            {
                console.log("Setting isLoaded to true");
                setisLoadingComplete(true);
            }, 3000);
        };

        loadResourcesAndDataAsync();
    }, [isLoadingComplete]);

    console.log("Returning: " + isLoadingComplete);
    return isLoadingComplete;
}

export default useCachedResources;
