import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View, Image } from 'react-native';
import styles from './styles';

function CadastroUsuario() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textFooterAlign}>
                    <Text style={styles.title}>Vamos começar:</Text>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.contentText}>Cuide dos seus veiculos para {'\n'}evitar problemas e gastos {'\n'}indesejados</Text>
            </View>

            <View style={styles.buttonsSection}>
                <RectButton style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
                <RectButton style={styles.texteButton}>
                    <Text style={styles.registerText}>
                        Não tem uma conta!
                        <Text style={styles.registerTextBold}> Cadastre-se</Text>
                    </Text>
                </RectButton>
                {/* <View style={{ flexDirection: 'row', paddingTop: 30 }}>
                    <View style={{ backgroundColor: '#FFF', height: 1.5, flex: 1, alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: '#FFF' }}>Ou conecte-se usando</Text>
                    <View style={{ backgroundColor: '#FFF', height: 1.5, flex: 1, alignSelf: 'center' }} />
                </View> */}
            </View>
        </View>
    );
}

export default CadastroUsuario;