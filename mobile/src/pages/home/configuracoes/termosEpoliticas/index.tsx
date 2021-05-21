import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import BackScreen from "../../../../components/backScreen";
import { List } from 'react-native-paper';

function Termos() {

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

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
          <List.Section>
            <List.Accordion
              title="Termos de serviço"
              titleStyle={styles.accordionTitle}>
              <View style={styles.textBody}>
                <Text style={styles.title}>Lorem Ipsum{"\n"}</Text>
                <Text style={styles.text}>
                  {"\t"}{"\t"} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Politica de dados"
              titleStyle={styles.accordionTitle}>
              <View style={styles.textBody}>
                <Text style={styles.title}>Quais Tipos de Informações Coletamos?{"\n"}</Text>
                <Text style={styles.text}>
                  {"\t"}{"\t"} Esta Política descreve as informações que processamos para viabilizar a operação do Meu Possante e de outros
                  Produtos e Recursos oferecidos pelo Meu Possante.
                  {"\n"}
                  {"\n"}
                  {"\t"}{"\t"} Para Fornecer os Produtos do Meu Possante, precisamos processar informações sobre você. Os tipos de informações que coletamos
                  dependem de como você usa nossos Produtos.{"\n"}{"\n"}
                  •	Coisas que você e outras pessoas fazem e fornecem{"\n"}
                    *	Informações e conteúdos que você fornece{"\n"}
                    *	Redes e conexões{"\n"}
                    *	Seu uso{"\n"}
                    *	O que os outros Fazem e informações que eles fornecem sobre você{"\n"}
                  {"\n"}
                  •	Informações de dispositivo{"\n"}
                    *	Atributos do Dispositivo{"\n"}
                    *	Operações do dispositivo{"\n"}
                    *	Identificadores{"\n"}
                    *	Sinais do Dispositivo{"\n"}
                    *	Dados das configurações do dispositivos{"\n"}
                    *	Rede e conexões
                </Text>
              </View>
            </List.Accordion>
          </List.Section>
        </View>
      </View>
    </ScrollView>
  );
}

export default Termos;
