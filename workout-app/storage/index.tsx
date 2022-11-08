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
        console.log(e.message);
    }
};

export const getData = async (key: string) =>
{
    try
    {
        const value = await AsyncStorage.getItem(key);

        if (value !== null)
        {
            const data = JSON.parse(value);
            return data;
        }
    } catch (e: any)
    {
        console.log(e.message);
    }
};

export const containsKey = async (key: string) =>
{
    try
    {

    } catch (e: any)
    {
        console.error(e.message);
    }
};