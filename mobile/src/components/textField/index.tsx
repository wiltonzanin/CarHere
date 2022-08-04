import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { TextInputProps } from 'react-native';
import { Icon } from 'react-native-elements';

interface TextFieldProps extends TextInputProps{
    labelName: string;
    value?: any;
    tipoTeclado?: any;
    exibeOpcional?: boolean;
    secureTextEntry?: boolean;
    mensagemErro?: string;
}

/**
 * Componente de TextIput com estilo padrão do app.
 * 
 * @param labelName: (string) Informe a label a ser exibida acima do campo;
 * @param value: (string) Informe o value do campo;
 * @param tipoTeclado: (any) Tipos de teclado mais usados: email-address, numeric, number-pad, decimal-pad, phone-pad;
 * @param exibeOpcional: (boolean) Exibe ou não o texto (opcional) acima do TextInput;
 * 
 */
const textField: React.FC<TextFieldProps> = ({ labelName, value, tipoTeclado, exibeOpcional, mensagemErro, ...rest }) => {

    //#region variaveis    
    let exibirLabelOpcional = exibeOpcional ? true : false;

    let exbirMensagemErro = false;

    if (mensagemErro != '' && mensagemErro !== undefined) {
        exbirMensagemErro = true;
    }
    //#endregion

    return (
        <View>
            <View style={styles.labelGroup}>
                <Text style={styles.formLabel}>{labelName}</Text>
                {exibirLabelOpcional && <Text style={styles.labelOpcional}>(Opcional)</Text>}
            </View>
            <View style={styles.inputGroup}>
                <TextInput style={styles.input} value={value} keyboardType={tipoTeclado} {...rest}/>
                {exbirMensagemErro && <Text style={styles.labelErro}><Feather name="alert-triangle" /> {mensagemErro}</Text>}
            </View>
        </View>
    );
}

export default textField;