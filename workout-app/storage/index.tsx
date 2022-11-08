import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';


export const storeData = async (key: string, value: any) =>
{
    try
    {
        const stringValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, stringValue);
    } catch (e: any)
    {
        console.log(e);
    }
};

export const getData = async (key: string) =>
{
    try
    {

    } catch (e)
    {

    }
};