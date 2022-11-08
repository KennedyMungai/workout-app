import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';


export const storeData = async (key: string, value: any) =>
{
    try
    {
        const stringValue = JSON.stringify(value);
    } catch (e: any)
    {
        console.log(e);
    }
};

export const getData = async () =>
{

};