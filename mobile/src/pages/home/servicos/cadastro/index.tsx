import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import styles from "./styles";
import TextField from "../../../../components/textField";
import DropDownPicker from "react-native-dropdown-picker";
import BackScreen from "../../../../components/backScreen";
import { Button } from "../../../../components/buttons";
import { Feather } from "@expo/vector-icons";

function CadastroVeiculo() {
  const { navigate } = useNavigation();
  const [motorizacao, setMotorizacao] = useState("");
  const [ano, setAno] = useState("");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.title}>Cadastre seu veículo</Text>
          <View />
        </View>
        <View>
          <TextField labelName="Nome" />
          <TextField labelName="Local que foi realizado o Serviço" />
          <TextField labelName="Data do Seviço" />
          <View style={styles.inputGroup}>
            <View style={styles.inputGroupColumn}>
              <TextField labelName="Motorização" tipoTeclado={"numeric"} funcaoOnChangeText={setMotorizacao} />
            </View>
            <View style={styles.inputGroupSecondColumn}>
              <Text style={styles.text}>Ano</Text>
              <DropDownPicker
                placeholder=""
                dropDownStyle={styles.dropdownList}
                labelStyle={styles.dropdownText}
                arrowColor={"#F0EFF4"}
                items={[
                  { label: "2022", value: "2022" },
                  { label: "2021", value: "2021" },
                  { label: "2020", value: "2020" },
                  { label: "2019", value: "2019" },
                  { label: "2018", value: "2018" },
                  { label: "2017", value: "2017" },
                  { label: "2016", value: "2016" },
                  { label: "2015", value: "2015" },
                  { label: "2014", value: "2014" },
                  { label: "2013", value: "2013" },
                  { label: "2012", value: "2012" },
                  { label: "2011", value: "2011" },
                  { label: "2010", value: "2010" },
                  { label: "2009", value: "2009" },
                  { label: "2008", value: "2008" },
                  { label: "2007", value: "2007" },
                  { label: "2006", value: "2006" },
                  { label: "2005", value: "2005" },
                  { label: "2004", value: "2004" },
                  { label: "2003", value: "2003" },
                  { label: "2002", value: "2002" },
                  { label: "2001", value: "2001" },
                  { label: "2000", value: "2000" },
                  { label: "1999", value: "1999" },
                  { label: "1998", value: "1998" },
                  { label: "1997", value: "1997" },
                  { label: "1996", value: "1996" },
                  { label: "1995", value: "1995" },
                  { label: "1994", value: "1994" },
                  { label: "1993", value: "1993" },
                  { label: "1992", value: "1992" },
                  { label: "1991", value: "1991" },
                  { label: "1990", value: "1990" },
                  { label: "1989", value: "1989" },
                  { label: "1988", value: "1988" },
                  { label: "1987", value: "1987" },
                  { label: "1986", value: "1986" },
                  { label: "1985", value: "1985" },
                  { label: "1984", value: "1984" },
                  { label: "1983", value: "1983" },
                  { label: "1982", value: "1982" },
                  { label: "1981", value: "1981" },
                  { label: "1980", value: "1980" },
                  { label: "1979", value: "1979" },
                  { label: "1978", value: "1978" },
                  { label: "1977", value: "1977" },
                  { label: "1976", value: "1976" },
                  { label: "1975", value: "1975" },
                  { label: "1974", value: "1974" },
                  { label: "1973", value: "1973" },
                  { label: "1972", value: "1972" },
                  { label: "1971", value: "1971" },
                  { label: "1970", value: "1970" },
                  { label: "1969", value: "1969" },
                  { label: "1968", value: "1968" },
                  { label: "1967", value: "1967" },
                  { label: "1966", value: "1966" },
                  { label: "1965", value: "1965" },
                  { label: "1964", value: "1964" },
                  { label: "1963", value: "1963" },
                  { label: "1962", value: "1962" },
                  { label: "1961", value: "1961" },
                  { label: "1960", value: "1960" },
                  { label: "", value: "" },
                ]}
                style={styles.dropdown}
                onChangeItem={(item) => { setAno(item.value) }}
              ></DropDownPicker>
            </View>
          </View>
          <TextField labelName="Tempo do Serviço" />
          <TextField labelName="Valor do Serviço" />
          <TextField labelName="Descrição do serviço realizado" />
          <TextField labelName="Observação:" />
        </View>
        <Button title="Concluir" />
      </View>
    </ScrollView>
  );
}

export default CadastroVeiculo;
