import React from 'react';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import TextField from '../../../components/textField';
import DropDownPicker from 'react-native-dropdown-picker';
import BackScreen from '../../../components/backScreen';

function CadastroVeiculo() {

    const { navigate } = useNavigation();

     function handleNavigateToApp() {
         navigate('App');
     }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <BackScreen/>
                    <Text style={styles.title}>Cadastre seu veículo:</Text>
                </View>
                <View style={styles.content}>
                    <TextField labelName="Nome" />
                    <TextField labelName="Marca" />
                    <TextField labelName="Configuração" />

                    <View style={styles.inputGroup}>
                    <View> 
                    <Text style={styles.text}>Ano</Text>
                    <DropDownPicker
                        placeholder="" 
                        dropDownStyle={{
                            backgroundColor: '#333333',
                            borderColor: '#525252',
                            width: 60
                        }}
                        placeholderStyle={{
                            width:60
                        }}
                        labelStyle={{
                            fontSize: 16,
                            color: '#fff',

                        }}
                        items={[
                            { label: '2020', value: '2020' },
                            { label: '2019', value: '2019' },
                            { label: '2018', value: '2018' },
                        ]}
                        style={styles.dropdown}
                    ></DropDownPicker>
                    </View> 
                    <View >
                    <Text style={styles.text}>Combustível</Text>
                    <DropDownPicker
                        placeholder="Selecione um item"
                        dropDownStyle={{
                            backgroundColor: '#333333',
                            borderColor: '#525252',
                            width: 200
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
                        style={styles.dropdownSegundo}
                        ></DropDownPicker>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonStyle}>
                    <RectButton onPress={handleNavigateToApp} style={styles.button}>
                        <Text style={styles.buttonText}>Concluir</Text>
                    </RectButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default CadastroVeiculo;

