import React, { useState } from 'react'
import { View, Text, Modal as DefaultModal, Style } from 'react-native'
import { PressableText } from './PressableText'


const Modal = () =>
{
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    return (
        <View>
            <DefaultModal
                visible={isModalVisible}
                transparent={false}
                animationType="slide"
            >
                <View style={styles.centerView}>
                    <Text>
                        Hello There!
                    </Text>
                    <PressableText
                        onPress={() => setIsModalVisible(false)}
                        text="Close Modal"
                    />
                </View>
            </DefaultModal>
            <PressableText
                onPress={() => setIsModalVisible(true)}
                text="Check Sequence"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Modal
