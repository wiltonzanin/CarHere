import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import TextField from '../../components/textField';
import BackScreen from '../../components/backScreen';
import { Button } from '../../components/buttons';

function RecuperarSenha() {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <BackScreen/>
                    <Text style={styles.title}>Recuperar senha</Text>
                    <Text style={styles.instructions}>Insira o email vinculado a sua conta e nós iremos enviar um e-mail com as instruções para a recuperação da senha.</Text>
                    <View style={styles.buttonContent}>
                        <TextField labelName="Email" tipoTeclado={"email-address"} />
                    </View>
                </View>
                <Button title='Enviar instruções'/>
            </View>
        </ScrollView>
    );
}

export default RecuperarSenha;