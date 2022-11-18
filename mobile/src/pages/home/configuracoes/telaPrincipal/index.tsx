import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ButtonMenu, ButtonPadrao } from "../../../../components/buttons";
import { UploadDB } from '../../../../database/dbConnection';
import LoadingScreen from "../../../../components/loadingScreen";
import { useState } from "react";
import { SuccessModal ,FeedbackModal} from "../../../../components/feedbackModal";
import NetInfo from "@react-native-community/netinfo";

function Configuracoes({ navigation }: any) {
  const { navigate } = useNavigation();
  const [carregando, setCarregando] = useState(false);
  const [modalMensage, setModalMensage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);

  function StatusNet() {
    var sts
    NetInfo.addEventListener(state => {
      sts = state.isConnected;
    });
    return sts
  }

  console.log(StatusNet())

  /*
  function handleNavigateToUnidadeMedida() {
    navigation.navigate("UnidadeMedida");
  }
  */
  function handleNavigateToTermos() {
    navigation.navigate("Termos");
  }
  function handleNavigateToOpcoesUsuario() {
    navigation.navigate("OpcoesUsuario");
  }
  /*
  function handleNavigateToNotificacao() {
    navigation.navigate("Notificacao");
  }
  function handleNavigateToAparencia() {
    navigation.navigate("Aparencia");
  }
  function handleNavigateToAcessibilidade() {
    navigation.navigate("Acessibilidade");
  }
  */

  function closeModal() {
    setCarregando(false);
    setModalVisible(false);
    setModalWarning(false);
  }

  function UpDB() {
    if(StatusNet() === true){
      UploadDB()
      setModalMensage("Salvo o banco de dados local na nuvem!");
      setModalVisible(true);
    }
    else{
      setModalMensage("Nescessario estar conectado na internet!");
      setModalWarning(true);
    }
  }
  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LoadingScreen carregando={carregando} />
      <SuccessModal
        modalVisible={modalVisible}
        funcaoOnRequestClose={closeModal}
        mensage={modalMensage} />
        <FeedbackModal
        modalVisible={modalWarning}
        funcaoOnRequestClose={closeModal}
        mensage={modalMensage} />
      <View style={styles.container}>
        <View style={styles.header}>
          <ButtonMenu
            title=""
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <Text style={styles.headerTitle}>Configurações</Text>
          <View />
        </View>
        <View>
          {/*
          <Text style={styles.sectionTitle}>Preferências</Text>
          <View style={styles.buttonsGroup}>
             <View style={styles.buttonsGroupContent}>
              <ButtonPadrao
                title="Unidades de medida"
                onPress={handleNavigateToUnidadeMedida}
              />
            </View> */}
            {/* <View style={styles.buttonsGroupContent}>
              <ButtonPadrao title="Acessibilidade"
                onPress={handleNavigateToAcessibilidade} />
            </View> */}
            {/* <View style={styles.buttonsGroupContent}>
              <ButtonPadrao
                title="Aparência"
                onPress={handleNavigateToAparencia}
              />
            </View> 
            <ButtonPadrao
              title="Notificações"
              onPress={handleNavigateToNotificacao}
            />
          </View>
          */}

          <Text style={styles.sectionTitle}>Conta</Text>
          <View style={styles.buttonsGroup}>
            <ButtonPadrao
              title="Opções de usuário"
              onPress={handleNavigateToOpcoesUsuario}
            />
          </View>
          <Text style={styles.sectionTitle}>Banco de dados</Text>
          <View style={styles.buttonsGroup}>
            <ButtonPadrao
              title="Salvar o Banco de dados na nuvem"
              onPress={UpDB}
            />
          </View>
          <Text style={styles.sectionTitle}>Termos do aplicativo</Text>
          <View style={styles.buttonsGroup}>
            <ButtonPadrao
              title="Termos de Serviço"
              onPress={handleNavigateToTermos}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Configuracoes;
