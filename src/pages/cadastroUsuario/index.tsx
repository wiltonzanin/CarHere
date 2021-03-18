import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';

function CadastroUsuario() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Vamos começar:</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.formLabel}>Nome</Text>
                <TextInput style={styles.input} onChangeText={text => { }} />
                <Text style={styles.formLabel}>Email</Text>
                <TextInput style={styles.input} onChangeText={text => { }} />
                <Text style={styles.formLabel}>Senha</Text>
                <TextInput style={styles.input} onChangeText={text => { }} />
                <Text style={styles.formLabel}>Confirme sua senha</Text>
                <TextInput style={styles.input} onChangeText={text => { }} />

                <View style={styles.buttonStyle}></View>
                <RectButton style={styles.button}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </RectButton>
            </View>
        </View>

    );
}

export default CadastroUsuario;