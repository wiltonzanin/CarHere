import React from "react";
import { Text, View, Modal, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface modalProps {
    modalVisible: boolean;
    funcaoOnRequestClose?: any;
    modalTypeWarning: boolean;
}

/**
 * Componente para exibir o modal de erro ou sucesso de uma operação.
 * 
 * @param modalVisible: (boolean) Este paremetro abre ou fecha o modal;
 * @param funcaoOnRequestClose: (any) Informe uma função que deseje realizar quando o modal for fechado;
 * @param modalTypeWarning: (boolean) Define se o tipo do modal é de aviso;
 * 
 */
const feedbackModal: React.FC<modalProps> = ({ modalVisible, funcaoOnRequestClose, modalTypeWarning }) => {

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
                    {modalTypeWarning
                        ? <Feather name='alert-circle' size={50} color={'#eca400'} style={{ marginTop: 20 }} />
                        : <Feather name='check-circle' size={50} color={'#5CB85C'} style={{ marginTop: 20 }} />
                    }
                    {modalTypeWarning
                        ? <Text style={styles.modalText}>Ops, tivemos um problema! Por favor tente novamente mais tarde.</Text>
                        : <Text style={styles.modalText}>Cadastro realizado com sucesso!</Text>
                    }
                    {modalTypeWarning
                        ? <Pressable
                            style={styles.button}
                            onPress={funcaoOnRequestClose}>
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                        : <Pressable
                            style={styles.button}
                            onPress={funcaoOnRequestClose}>
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    }
                </View>
            </View>
        </Modal>
    );
}

export default feedbackModal;