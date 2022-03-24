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
import { time } from "console";

function CadastroServicos() {
  const { navigate } = useNavigation();
  const [tempodoservico, setservicotempo] = useState("");
  const [ano, setAno] = useState("");
  const [date, setDate] = useState(new Date());
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

  var dataformatada =  date.getDate().toString().padStart(2, '0') + "/";
  dataformatada += (date.getMonth() + 1).toString().padStart(2, '0') + "/";
  dataformatada += date.getFullYear().toString();



  console.log('...........')
  console.log(date);
  console.log(dataformatada);



  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.title}>Cadastre o serviço</Text>
        </View>

        <View>
          <TextField labelName="Nome" />
          <TextField labelName="Local que foi realizado o serviço" />
          <View style={styles.inputGroup}>
            <View style={styles.inputGroupSecondColumn}>
                <TextField
                  value={dataformatada}
                  labelName="Data do Serviço"
                  onTouchStart={showDatepicker}
                />
                <View>
                  {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={dataformatada}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                  )}
                </View>
            </View>
            <View style={styles.inputGroupColumn}>
              <TextField  
                placeholder="00:00" 
                labelName="Tempo de serviço" 
                onChangeText={setservicotempo} 
                maxLength={4} 
                numberOfLines={4}
                tipoTeclado={"numeric"}
                value={tempodoservico.replace(/(\d{2})(\d{2})/, "$1:$2")}
              />
            </View>
          </View>
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
