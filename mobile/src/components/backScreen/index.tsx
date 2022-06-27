import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import {darkTheme} from '../../Styles/colors'

/**
 * Componente para retonar a tela anterior.
 * 
 */
function backScreen() {

    const navigation = useNavigation();

    return (
        <BorderlessButton onPress={navigation.goBack} style={styles.backButtonStyle}>
            <Feather name="arrow-left" size={24} color={darkTheme.grayLight} />
        </BorderlessButton>
    );
}

export default backScreen;