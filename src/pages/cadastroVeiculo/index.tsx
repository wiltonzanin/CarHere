import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import TextField from '../../components/textField';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


function CadastroVeiculo() {

    const { navigate } = useNavigation();
    Icon.loadFont()

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
                    <TextField labelName="Nome" />
                    <TextField labelName="Marca" />
                    <TextField labelName="Ano" />
                    <TextField labelName="Configuração" />
                    <Text style={styles.text}>Combustivel</Text>
                    <DropDownPicker
                        dropDownStyle={{
                            backgroundColor: '#333333',
                            borderColor: '#525252',
                            
                        }}
                        labelStyle={{
                            fontSize: 16,
                            color: '#fff'
                        }}

                        items={[
                            { label: 'Gasolina', value: 'gasolina' },
                            { label: 'Alcool', value: 'alcool' },
                            { label: 'Diesel', value: 'Diesel' },
                        ]}

                        style={styles.dropdown}
                    ></DropDownPicker>
                    
                </View>
                <View style={styles.buttonStyle}>
                    <RectButton onPress={handleNavigateToSegundaTelaCadastro} style={styles.button}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </RectButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default CadastroVeiculo;

