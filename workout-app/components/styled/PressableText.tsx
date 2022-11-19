import React from "react"
import { Pressable, PressableProps, Text } from "react-native"

export type PressableTextProps = PressableProps & { text: string }

export const PressableText = (props: PressableTextProps) =>
{
    return (
        <Pressable
            {...props}
        >
            <Text
                style={{ textDecorationLine: "underline" }}
            >
                {props.text}
            </Text>
        </Pressable>
    )
}