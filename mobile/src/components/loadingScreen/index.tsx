import React from "react";
import { Text, View, Modal, ActivityIndicator } from "react-native";

import styles from './styles';

interface loadingScreenProps {
    carregando?: boolean
}

/**
 * Componente para exibir o modal de carregamento de tela.
 * 
 * @param carregando: (boolean) Este paremetro exibe ou não a tela de carregamento;
 * 
 */
const loadingScreen: React.FC<loadingScreenProps> = ({ carregando = false }) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={carregando}
            statusBarTranslucent={true}
        >
            <View style={styles.containerModalLoading}>
                <ActivityIndicator
                    animating={carregando}
                    color='#F0EFF4'
                    size="large" />
                <Text style={styles.modalLoadingText}>Por favor, aguarde!</Text>
            </View>
        </Modal>
    );
}

export default loadingScreen;