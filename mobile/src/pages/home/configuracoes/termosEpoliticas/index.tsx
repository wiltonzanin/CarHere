import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import BackScreen from "../../../../components/backScreen";
import { Accordion } from "@material-ui/core";

function Termos() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <View style={{ paddingLeft: "15%" }}>
            <Text style={styles.title}>Termos</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Politica de Dados</Text>
         

              <Text style={styles.title}>
                Quais Tipos de Informações Coletamos?
              </Text>
          <Text style={styles.text}>
            Esta Política descreve as informações que processamos para
            viabilizar a operação do Meu Possante e de outros Produtos e
            Recursos oferecidos pelo Meu Possante. {"\n"}
            Para Fornecer os Produtos do Meu Possante, precisamos processar
            informações sobre você. Os tipos de informações que
            coletamosdependem de como você usa nossos Produtos.
          </Text>
          <Text style={styles.text}>
            • Coisas que você e outras pessoas fazem e fornecem{"\n"} *
            Informações e conteúdos que você fornece{"\n"} * Redes e conexões
            {"\n"} * Seu uso{"\n"} * O que os outros Fazem e informações que
            eles fornecem sobre você
          </Text>
          <Text style={styles.text}>
            •Informações de dispositivo{"\n"} * Atributos do Dispositivo{"\n"} *
            Operações do dispositivo{"\n"} * Identificadores{"\n"} * Sinais do
            Dispositivo * Dados das configurações do dispositivos{"\n"} * Rede e
            conexões
          </Text>
          <Text style={styles.title}>
            Quais Tipos de Informações Coletamos?
          </Text>
          <Text style={styles.text}></Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Termos;
