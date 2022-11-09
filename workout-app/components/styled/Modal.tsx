import React from 'react'
import { View, Text, Modal, Style } from 'react-native'
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

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold",
    },
});

export default Modal
