import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import { ButtonPadrao } from "../../../../components/buttons";
import BackScreen from "../../../../components/backScreen";

function Acessibilidade({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.headerTitle}>Acessibilidade</Text>
          <Feather name="save" size={24} color='#F0EFF4' />
        </View>
        <View>
          <Text style={styles.sectionTitle}>Leitores de tela</Text>
          <View style={styles.buttonsGroup}>
            <View style={styles.buttonsGroupContent}>
              <ButtonPadrao title="Selecionar leitor de tela" />
            </View>
            <ButtonPadrao title="Conversão de texto em voz" />
          </View>
          <Text style={styles.sectionTitle}>Audio e texto na tela</Text>
          <View style={styles.buttonsGroup}>
            <ButtonPadrao title="Legendas" />
          </View>
          <Text style={styles.sectionTitle}>Controles de interação</Text>
          <View style={styles.buttonsGroup}>
            <View style={styles.buttonsGroupContent}>
              <ButtonPadrao title="Atraso ao tocar e pressionar" />
            </View>
            <ButtonPadrao title="Vibração" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Acessibilidade;
