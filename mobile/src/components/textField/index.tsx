import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

interface TextFieldProps {
    labelName: string;
    value?: any;
    funcaoOnChangeText?: any;
    tipoTeclado?: any;
    exibeOpcional?: boolean;
    secureTextEntry?: boolean;
}

/**
 * Componente de TextIput com estilo padrão do app.
 * 
 * @param labelName: (string) Informe a label a ser exibida acima do campo;
 * @param value: (string) Informe o value do campo;
 * @param tipoTeclado: (any) Tipos de teclado mais usados: email-address, numeric, number-pad, decimal-pad, phone-pad;
 * @param exibeOpcional: (boolean) Exibe ou não o texto (opcional) acima do TextInput;
 * @param secureTextEntry: (boolean) Exibe ou não os caracters de texto;
 * 
 */
const textField: React.FC<TextFieldProps> = ({ labelName, value, funcaoOnChangeText, tipoTeclado, exibeOpcional, secureTextEntry }) => {

    //#region variaveis    
    let exibirLabelOpcional = exibeOpcional ? true : false;

    let exibirMensagemErro = false;

    let mensagemErro = "Preencha o campo com um valor válido!";
    //#endregion

    const [getValue, setValue] = useState('')

    return (
        <View>
            <View style={styles.labelGroup}>
                <Text style={styles.formLabel}>{labelName}</Text>
                {exibirLabelOpcional && <Text style={styles.labelOpcional}>(Opcional)</Text>}
            </View>
            <View style={styles.inputGroup}>
                <TextInput style={styles.input} value={value} onChangeText={funcaoOnChangeText} keyboardType={tipoTeclado} secureTextEntry={secureTextEntry} />
                {exibirMensagemErro && <Text style={styles.labelErro}><Feather name="alert-triangle" /> {mensagemErro}</Text>}
            </View>
        </View>
    );
}

export default textField;