import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function SegundaTelaCadastro() {

    const { navigate } = useNavigation();

    function handleNavigateToTerceiraTelaCadastro() {
        navigate('TerceiraTelaCadastro');
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Adicione fotos do seu veículo:</Text>
                    <Text style={styles.subtitle}>(opcional):</Text>
                </View>
                <View style={styles.content}>
                   
                    
                </View>
                <View style={styles.buttonStyle}>
                    <RectButton onPress={handleNavigateToTerceiraTelaCadastro} style={styles.button}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </RectButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default SegundaTelaCadastro;
