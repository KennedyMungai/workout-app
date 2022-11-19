import React from "react"
import { Pressable, PressableProps, StyleProp, Text, TextStyle } from "react-native"

export type PressableTextProps = PressableProps & { text: string, style: StyleProp<TextStyle> }

export const PressableText = (props: PressableTextProps) =>
{
    return (
        <Pressable
            {...props}
        >
            <Text
                style={[props.style, { textDecorationLine: "underline" }]}
            >
                {props.text}
            </Text>
        </Pressable>
    )
}