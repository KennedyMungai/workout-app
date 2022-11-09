import React from "react"
import { Pressable, PressableProps, Text } from "react-native"

export const PressableText = (props: PressableProps) =>
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