import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import TextField from '../../../components/textField';

function CadastroUsuario() {

    const { navigate } = useNavigation();

    function handleNavigateToCadastroVeiculo() {
        navigate('CadastroVeiculo');
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Vamos começar:</Text>
                </View>
                <View style={styles.content}>
                    <TextField labelName="Nome" />
                    <TextField labelName="Email" />
                    <TextField labelName="Senha" />
                    <TextField labelName="Confirme sua senha" />
                </View>
                <View style={styles.buttonStyle}>
                    <RectButton onPress={handleNavigateToCadastroVeiculo} style={styles.button}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </RectButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default CadastroUsuario;