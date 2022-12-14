import React, { FunctionComponent, ReactNode, useState } from 'react'
import { View, Text, Modal as DefaultModal, StyleSheet } from 'react-native'
import { PressableText } from './PressableText'

type ModalProps = {
    activator?: FunctionComponent<
        {
            handleOpen: () => void
        }
    >,
    children: FunctionComponent<
        {
            handleOpen: () => void,
            handleClose: () => void
        }
    >
}

const Modal = ({
    activator: Activator,
    children
}: ModalProps) =>
{
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const handleOpen = () => setIsModalVisible(true)
    const handleClose = () => setIsModalVisible(false)

    return (
        <View>
            <DefaultModal
                visible={isModalVisible}
                transparent={false}
                animationType="slide"
            >
                <View style={styles.centerView}>
                    <View style={styles.contentView}>
                        {
                            children({ handleOpen, handleClose })
                        }
                    </View>
                    <PressableText
                        onPress={handleClose}
                        text="Close Modal"
                    />
                </View>
            </DefaultModal>
            {
                Activator ?
                    <Activator
                        handleOpen={handleOpen}
                    /> :
                    <PressableText
                        onPress={handleOpen}
                        text="Check Sequence"
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    contentView: {
        marginBottom: 20,

    }
});

export default Modal
