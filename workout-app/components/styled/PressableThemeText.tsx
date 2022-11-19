import { Text, useColorScheme } from 'react-native'
import { PressableTextProps } from './PressableText'


const PressableThemeText = (props: PressableTextProps) =>
{
    const colorScheme = useColorScheme()
    const color = colorScheme === "light" ? "#000" : "#fff"

    return (
        <Text
            {...props}
            style={[props.style, { color }]}
        />
    )
}

export default PressableThemeText