import React, { useState, useEffect } from 'react';


const useCachedResources = () =>
{
    const [isLoadingComplete, setisLoadingComplete] = useState<boolean>(false);


    return isLoadingComplete;
}

export default useCachedResources;
