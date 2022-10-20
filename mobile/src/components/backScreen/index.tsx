import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { StackActions, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { darkTheme } from '../../Styles/colors'

interface backButtonProps {
    backToHome?: boolean;
}

/**
 * Componente para retonar a tela anterior.
 * 
 */
function backScreen({ backToHome }: backButtonProps) {

    const navigation = useNavigation();

    if (backToHome === undefined) {
        backToHome = false;
    }

    function backHome() {
        navigation.dispatch(StackActions.push('Home'))
    }

    return (
        <BorderlessButton onPress={backToHome ? backHome : navigation.goBack} style={styles.backButtonStyle}>
            <Feather name="arrow-left" size={24} color={darkTheme.grayLight} />
        </BorderlessButton>
    );
}

export default backScreen;