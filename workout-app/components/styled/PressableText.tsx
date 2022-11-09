import React from "react"
import { Pressable, Text } from "react-native"

export const PressableText = () =>
{
    return (
        <Pressable
            onPress={() => alert("Opening Modal")}
        >
            <Text
                style={{ textDecorationLine: "underline" }}
            >
                Check Sequence
            </Text>
        </Pressable>
    )
}