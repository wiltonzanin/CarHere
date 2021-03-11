import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View, Image } from 'react-native';
import styles from './styles';

function CadastroUsuario() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textHeaderAlign}>
                    <Text style={styles.title}>Vamos começar:</Text>
                </View>
            </View>
        </View>
    );
}

export default CadastroUsuario;