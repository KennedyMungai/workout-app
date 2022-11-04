import React, { useState, useEffect } from 'react';


const useCachedResources = () =>
{
    const [isLoadingComplete, setisLoadingComplete] = useState<boolean>(false);

    useEffect(() =>
    {
        const loadResourcesAndDataAsync = () =>
        {
            setTimeout(() =>
            {
                setisLoadingComplete(true);
            }, 3000);
        };

        loadResourcesAndDataAsync();
    }, [isLoadingComplete]);


    return isLoadingComplete;
}

export default useCachedResources;
