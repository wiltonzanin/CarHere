import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

/**
 * Componente para retonar a tela anterior.
 * 
 */
function RecuperarSenha() {

    const navigation = useNavigation();

    return (
        <BorderlessButton onPress={navigation.goBack} style={styles.backButtonStyle}>
            <Feather name="arrow-left" size={24} color='#F0EFF4' />
        </BorderlessButton>
    );
}

export default RecuperarSenha;