import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import styles from './styles';

function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.footer}>
                <View style={styles.textFooterAlign}>
                    <Text style={styles.title}>Bem vindo!</Text>
                    <Text style={styles.subtitle}>Estamos muito felizes {'\n'}com a sua chegada :)</Text>
                </View>
            </View>

            <View style={styles.buttonsSection}>
                <RectButton style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default Home;