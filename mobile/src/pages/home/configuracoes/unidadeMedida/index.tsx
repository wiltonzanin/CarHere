import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import { Feather } from '@expo/vector-icons';
import {darkTheme} from '../../../../Styles/colors'
import fonts from '../../../../Styles/fonts'

import BackScreen from "../../../../components/backScreen";

function UnidadeMedida() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.headerTitle}>Unidades de medida</Text>
          <Feather name="save" size={24} color={darkTheme.grayLight} />
        </View>
        <View>
          <Text style={styles.title}>Tipo de métrica</Text>
          <DropDownPicker
            placeholder="Selecione um item"
            dropDownStyle={styles.dropdown}
            labelStyle={styles.dropdownText}
            arrowColor={darkTheme.grayLight}
            items={[
              { label: "Quilômetros", value: "Quilometros" },
              { label: "Milhas", value: "Milhas" },
            ]}
            style={styles.dropdown}
          ></DropDownPicker>
          <Text style={styles.title}>Unidade de medida de volume</Text>
          <DropDownPicker
            placeholder="Selecione um item"
            dropDownStyle={styles.dropdown}
            labelStyle={styles.dropdownText}
            arrowColor={darkTheme.grayLight}
            items={[
              { label: "Litros", value: "Litros" },
              { label: "Galões", value: "galoes" },
            ]}
            style={styles.dropdown}
          ></DropDownPicker>
        </View>
      </View>
    </ScrollView>
  );
}

export default UnidadeMedida;
