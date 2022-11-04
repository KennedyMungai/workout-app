import React from 'react';


export const secToMin = (sec: number): string =>
{
    return (sec / 60).toFixed(1);
}

export const formatSec = (sec: number): string => 
{
    const _min = Math.floor(sec / 60);
    const _sec = sec % 60;

    return `${_min} minutes { _sec } seconds`;
};