import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import TextField from '../../../components/textField';

function TerceiraTelaCadastro() {

    const { navigate } = useNavigation();

    function handleNavigateToSegundaTelaCadastro() {
        navigate('SegundaTelaCadastro');
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Vamos começar:</Text>
                </View>
                <View style={styles.content}>
                    <TextField labelName="Valor do IPVA (opcional)" />
                    <TextField labelName="Ultima troca de óleo (opcional)" />
                </View>
                <View style={styles.buttonStyle}>
                    <RectButton style={styles.button}>
                        <Text style={styles.buttonText}>Concluir</Text>
                    </RectButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default TerceiraTelaCadastro;