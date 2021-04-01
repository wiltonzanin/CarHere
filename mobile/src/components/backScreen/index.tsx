import React from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

/**
 * Componente para retonar a tela anterior.
 * 
 */
function RecuperarSenha() {

    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <RectButton onPress={handleNavigateBack} style={styles.backButtonStyle}>
            <Feather name="arrow-left" size={25} color='#F0EFF4' />
        </RectButton>
    );
}

export default RecuperarSenha;