import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import styles from "./DetalheVeiculoStyle";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import BackButton from '../../../components/backScreen'

function visualizarVeiculo({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.search}>
            <BackButton/>
            <Text style={styles.text}> *nome do veiculo* </Text>
            <View style={styles.search}>
              <RectButton
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                style={styles.buttonsHeader}
              >
                <Feather name="edit" size={25} color="#F0EFF4" />
              </RectButton>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.imagemVeiculo}>
            <Text style={styles.text}>Imagem do veículo</Text>
          </View>
          <Text style={styles.text}>Autonomia</Text>
          <View style={styles.infosServicos}>
            <View style={styles.autonomia}>
              <Text style={styles.textInfo1}>Gasolina</Text>
              <Text style={styles.textInfo2}>Cidade</Text>
              <Text style={styles.textInfo2}>*valor* Km/L</Text>
              <Text style={styles.textInfo2}>Estrada</Text>
              <Text style={styles.textInfo2}>*valor* Km/L</Text>
            </View>
            <View style={styles.espacamentoAutonomia}>
              <View style={styles.autonomia}>
                <Text style={styles.textInfo1}>Álcool</Text>
                <Text style={styles.textInfo2}>Cidade</Text>
                <Text style={styles.textInfo2}>*valor* Km/L</Text>
                <Text style={styles.textInfo2}>Estrada</Text>
                <Text style={styles.textInfo2}>*valor* Km/L</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>Serviços</Text>
          <View style={styles.infosServicos}>
            <ScrollView
              style={{ height: 155, paddingTop: 5 }}
              horizontal={true}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              <View style={styles.espacamentoServicos}>
                <View style={styles.servicos}>
                  <Text style={styles.textInfo1}>Nome do serviço</Text>
                  <Text style={styles.textInfo2}>Data</Text>
                  <View style={{ paddingTop: 45 }}>
                    <Text style={styles.textInfo2}>*Status*</Text>
                  </View>
                </View>
              </View>
              <View style={styles.espacamentoServicos}>
                <View style={styles.servicos}>
                  <Text style={styles.textInfo1}>Nome do serviço</Text>
                  <Text style={styles.textInfo2}>Data</Text>
                  <View style={{ paddingTop: 45 }}>
                    <Text style={styles.textInfo2}>*Status*</Text>
                  </View>
                </View>
              </View>
              <View style={styles.espacamentoServicos}>
                <View style={styles.servicos}>
                  <Text style={styles.textInfo1}>Nome do serviço</Text>
                  <Text style={styles.textInfo2}>Data</Text>
                  <View style={{ paddingTop: 45 }}>
                    <Text style={styles.textInfo2}>*Status*</Text>
                  </View>
                </View>
              </View>
              <View style={styles.espacamentoServicos}>
                <View style={styles.servicos}>
                  <Text style={styles.textInfo1}>Nome do serviço</Text>
                  <Text style={styles.textInfo2}>Data</Text>
                  <View style={{ paddingTop: 45 }}>
                    <Text style={styles.textInfo2}>*Status*</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <Text style={styles.text}>Informações</Text>
          <View style={styles.infos}>
            <View>
              <Text style={styles.textInfo}>Marca</Text>
              <Text style={styles.textInfoCampo}>*nome*</Text>
              <Text style={styles.textInfo}>Ano</Text>
              <Text style={styles.textInfoCampo}>*data*</Text>
              <Text style={styles.textInfo}>Motorização</Text>
              <Text style={styles.textInfoCampo}>*info*</Text>
            </View>
            <View style={styles.espacamentoInfos}>
              <Text style={styles.textInfo}>Modelo</Text>
              <Text style={styles.textInfoCampo}>*nome*</Text>
              <Text style={styles.textInfo}>Combustível</Text>
              <Text style={styles.textInfoCampo}>*nome*</Text>
              <Text style={styles.textInfo}>Quilometragem</Text>
              <Text style={styles.textInfoCampo}>*valor*</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default visualizarVeiculo;
