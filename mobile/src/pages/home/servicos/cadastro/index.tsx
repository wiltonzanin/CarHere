import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView, TextInput, TouchableOpacity, Image, Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import styles from "./styles";
import TextField from "../../../../components/textField";
import DropDownPicker from "react-native-dropdown-picker";
import BackScreen from "../../../../components/backScreen";
import { Button } from "../../../../components/buttons";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

function CadastroServicos() {
  const { navigate } = useNavigation();
  const [datadoservico, setMotorizacao] = useState("");
  const [ano, setAno] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  console.log(date)


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.title}>Cadastre o serviço</Text>
          <View />

        </View>

        <View>
          <TextField labelName="Nome" />
          <TextField labelName="Local que foi realizado o serviço" />

          <View style={styles.inputGroup}>
            <View style={styles.inputGroupSecondColumn}>
                <View>
                  <TextField placeholder="teste" labelName="Data do Serviço" tipoTeclado={"numeric"} onTouchStart={showDatepicker} onChangeText={setMotorizacao} maxLength={8}/>
                </View>
            </View>

            <View style={styles.inputGroupColumn}>
              <TextField placeholder="teste" labelName="Tempo de serviço" tipoTeclado={"numeric"} onTouchStart={showTimepicker} onChangeText={setMotorizacao} maxLength={4}/>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          <Text style={styles.title}>date </Text>
          <TextField labelName="Valor do serviço" tipoTeclado={"numeric"} />
          <Text style={styles.text}>Descrição do serviço realizado:</Text>
          {/* documentação: https://reactnative.dev/docs/textinput */}
          <TextInput
            style={styles.textInput}
            multiline={true}
            textAlignVertical="top" />
        </View>

        <Button title="Concluir" />
      </View>
    </ScrollView>
  );
}

export default CadastroServicos;
