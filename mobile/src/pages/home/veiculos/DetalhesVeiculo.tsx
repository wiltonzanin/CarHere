import * as React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import styles from "./DetalhesVeiculoStyle";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import BackButton from '../../../components/backScreen';

function visualizarVeiculo({ navigation }: any) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.text}> Impreza GC8 </Text>
          <RectButton
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Feather name="edit" size={25} color="#F0EFF4" />
          </RectButton>
        </View>
        <View>
          <View style={styles.imagesContainer}>
            <ScrollView horizontal pagingEnabled>
              <Image source={require('../../../assets/images/impreza.jpg')} style={styles.imgVeiculo} />
              <Image source={require('../../../assets/images/impreza2.jpg')} style={styles.imgVeiculo} />
            </ScrollView>
          </View>
          <Text style={styles.sectionTitle}>Autonomia</Text>
          <View style={styles.infosServicos}>
            <View style={styles.autonomia}>
              <Text style={styles.textInfo1}>Gasolina</Text>
              <Text style={styles.textInfo2}>Cidade</Text>
              <Text style={styles.textInfo2}>8 Km/L</Text>
              <Text style={styles.textInfo2}>Estrada</Text>
              <Text style={styles.textInfo2}>12 Km/L</Text>
            </View>
            <View style={styles.autonomia}>
              <Text style={styles.textInfo1}>Álcool</Text>
              <Text style={styles.textInfo2}>Cidade</Text>
              <Text style={styles.textInfo2}>n/a Km/L</Text>
              <Text style={styles.textInfo2}>Estrada</Text>
              <Text style={styles.textInfo2}>n/a Km/L</Text>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Serviços</Text>
          <View style={styles.infosServicos}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}>
              <View style={styles.servicos}>
                <Text style={styles.textInfo1}>Troca de óleo</Text>
                <Text style={styles.textInfo2}>26/04/2021</Text>
                <View style={{ paddingTop: 35 }}>
                  <Text style={styles.textStatusOk}><Feather name='check-circle' size={14} color='#5CB85C' /> Tudo certo!</Text>
                </View>
              </View>
              <View style={styles.servicos}>
                <Text style={styles.textInfo1}>Revisão dos freios</Text>
                <Text style={styles.textInfo2}>26/04/2021</Text>
                <View style={{ paddingTop: 35 }}>
                  <Text style={styles.textStatusWarning}><Feather name='alert-circle' size={14} color='#F0AD4E' /> Requer ação!</Text>
                </View>
              </View>
              <View style={styles.servicos}>
                <Text style={styles.textInfo1}>Manutenção preventiva</Text>
                <Text style={styles.textInfo2}>26/04/2021</Text>
                <View style={{ paddingTop: 35 }}>
                  <Text style={styles.textStatusError}><Feather name='x-circle' size={14} color='#D9534F' /> Requer ação!</Text>
                </View>
              </View>
              <View style={styles.servicos}>
                <Text style={styles.textInfo1}>Troca de correia</Text>
                <Text style={styles.textInfo2}>26/04/2021</Text>
                <View style={{ paddingTop: 35 }}>
                  <Text style={styles.textStatusOk}><Feather name='check-circle' size={14} color='#5CB85C' /> Tudo certo!</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <Text style={styles.sectionTitle}>Informações</Text>
          <View style={styles.infos}>
            <View>
              <Text style={styles.textInfo}>Marca</Text>
              <Text style={styles.textInfoCampo}>Subaru</Text>
              <Text style={styles.textInfo}>Ano</Text>
              <Text style={styles.textInfoCampo}>1996</Text>
              <Text style={styles.textInfo}>Motorização</Text>
              <Text style={styles.textInfoCampo}>2.5</Text>
            </View>
            <View>
              <Text style={styles.textInfo}>Modelo</Text>
              <Text style={styles.textInfoCampo}>Impreza GC8</Text>
              <Text style={styles.textInfo}>Combustível</Text>
              <Text style={styles.textInfoCampo}>Gasolina</Text>
              <Text style={styles.textInfo}>Quilometragem</Text>
              <Text style={styles.textInfoCampo}>156148</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default visualizarVeiculo;