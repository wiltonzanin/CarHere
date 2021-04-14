import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import BackScreen from '../../../components/backScreen';

function Sobre() {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <BackScreen/>
                    <Text style={styles.title}>Sobre</Text>
                    <Text style={styles.instructions}>Informações.</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Sobre;