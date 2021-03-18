import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

interface TextFieldProps {
    labelName: string;
}

const textField: React.FC<TextFieldProps> = ({ labelName }) => {
    return (
        <View>
            <Text style={styles.formLabel}>{labelName}</Text>
            <TextInput style={styles.input} onChangeText={text => { }} />
        </View>
    );
}

export default textField;