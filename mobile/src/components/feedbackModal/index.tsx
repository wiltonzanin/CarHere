import React, { useState } from "react";
import { Text, View, Modal, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface modalProps {
    modalVisible: boolean;
    funcaoOnRequestClose?: any;
    funcaoFecharModal?: () => void;
    mensage?: string;
}

/**
 * Componente para exibir o modal de erro ou sucesso de uma operação.
 * 
 * @param modalVisible: (boolean) Este paremetro abre ou fecha o modal;
 * @param funcaoOnRequestClose: (any) Informe uma função que deseje realizar quando o modal for fechado;
 * @param modalTypeWarning: (boolean) Define se o tipo do modal é de aviso;
 * 
 */

export const SuccessModal: React.FC<modalProps> = ({ modalVisible, funcaoOnRequestClose, mensage }) => {

    if (mensage == undefined || mensage == "") {
        mensage = "Operação realizada com sucesso!"
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={funcaoOnRequestClose}
            statusBarTranslucent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Feather name='check-circle' size={50} color={'#5cb85c'} style={{ marginTop: 20 }} />
                    <Text style={styles.modalText}>{mensage}</Text>
                    <Pressable
                        style={styles.button}
                        onPress={funcaoOnRequestClose}>
                        <Text style={styles.textStyle}>OK</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

export const FeedbackModal: React.FC<modalProps> = ({ modalVisible, funcaoOnRequestClose, mensage }) => {

    if (mensage == undefined || mensage == "") {
        mensage = "Ops, tivemos um problema! Por favor tente novamente mais tarde."
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={funcaoOnRequestClose}
            statusBarTranslucent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Feather name='alert-circle' size={50} color={'#eca400'} style={{ marginTop: 20 }} />
                    <Text style={styles.modalText}>{mensage}</Text>
                    <Pressable
                        style={styles.button}
                        onPress={funcaoOnRequestClose}>
                        <Text style={styles.textStyle}>OK</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

export const ErrorModal: React.FC<modalProps> = ({ modalVisible, funcaoOnRequestClose, mensage }) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={funcaoOnRequestClose}
            statusBarTranslucent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Feather name='x-circle' size={50} color={'#d9534f'} style={{ marginTop: 20 }} />
                    <Text style={styles.modalText}>{mensage}</Text>
                    <Pressable
                        style={styles.button}
                        onPress={funcaoOnRequestClose}>
                        <Text style={styles.textStyle}>OK</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

export const DecisionModal: React.FC<modalProps> = ({ modalVisible, funcaoOnRequestClose, funcaoFecharModal, mensage }) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={funcaoOnRequestClose}
            statusBarTranslucent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Feather name='help-circle' size={50} color={'#f0ad4e'} style={{ marginTop: 20 }} />
                    <Text style={styles.modalText}>{mensage}</Text>
                    <View style={styles.groupButton}>
                        <Pressable
                            style={styles.leftButton}
                            onPress={funcaoFecharModal}>
                            <Text style={styles.textStyle}>Não</Text>
                        </Pressable>
                        <Pressable
                            style={styles.rightButton}
                            onPress={funcaoOnRequestClose}>
                            <Text style={styles.textStyle}>Sim</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}