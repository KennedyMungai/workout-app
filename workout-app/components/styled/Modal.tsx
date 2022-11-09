import React from 'react'
import { View, Text, Modal, StyleSheet } from 'react-native'
import { PressableText } from './PressableText'


const Modal = () =>
{
    return (
        <Modal
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
        </Modal >
    )
}

export default Modal
