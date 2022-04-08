import React, {useEffect, useState} from "react";
import { View, Text, BackHandler, ScrollView } from "react-native";
import { DrawerActions, useNavigation, useFocusEffect, StackActions, useRoute} from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { ButtonAdicionar } from "../../../components/buttons";
import { ButtonMenu } from "../../../components/buttons";
import { Servico } from "../../../components/infos";
import api from "../../../services/api";
import LoadingScreen from "../../../components/loadingScreen";
import SearchBar from "../../../components/searchBar";


interface DetalhesServicoRouteParams {
  id: number;
};

interface servico {
  id: number;
  nome: string;
  local: string;
  quilometragem: number,
  datafor: string;
  ValorServico: number;
  carro: Array<{
    marca: string;
    modelo: string;
  }>;
  id_usuario: number;
}

function Servicos({ navigation }: any) {

  let listaVazia = true;

  const [carregando, setCarregando] = useState(false);
  const [erroCarregar, setErroCarregar] = useState(false);
  const [servico, setServico] = useState<servico[]>([]);
  
  const route = useRoute();
  /* const params = route.params as DetalhesServicoRouteParams; */

  const { navigate } = useNavigation();

  function handleNavigateToVisualizarServicos(id: number) {
    navigation.navigate("VisualizarServicos", { id });
  }
  
  function handleNavigateToCadastrarServicos() {
    navigation.navigate("CadastroServicos");
  }

/*
useEffect(() => {
  api.get(`carros/servico/${params.id}`).then(response => {
    setCarros(response.data);
  })
}, [params.id])
*/

  useEffect(() => {
    setCarregando(true);
    api.get('servico/1').then(response => {
      setServico(response.data);
      setCarregando(false);
      //console.log(response.data)
    }).catch(() => {
      setCarregando(false);
      setErroCarregar(true);
    })
  }, [])
 
  useFocusEffect(() => {
    const backAction = () => {
      const pushAction = StackActions.push('Home');
      navigation.dispatch(pushAction);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  });

  if (servico.length > 0) {
    listaVazia = false
  }
  console.log(servico)
  //console.log("teste " + servico.carro[0].modelo)

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LoadingScreen carregando={carregando} />
      <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.headerGroup}>
            <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
            <Text style={styles.headerText}>Serviços</Text>
            <SearchBar></SearchBar>
          </View>
        </View>
        <ButtonAdicionar title="Adicionar Serviço" onPress={handleNavigateToCadastrarServicos} />
        <View style={styles.contentServico}>
          {erroCarregar
            ?
            <View style={styles.listagemErroServico}>
              <Feather name='cloud-off' size={50} color={'#F0EFF4'} />
              <Text style={{ color: 'white', fontSize: 20, paddingTop: 20 }}>Não foi possível carregar os dados!</Text>
            </View>
            :
            listaVazia
              ?
              <View style={styles.listagemErroServico}>
                <Feather name='archive' size={50} color={'#F0EFF4'} />
                <Text style={{ color: 'white', fontSize: 20, paddingTop: 20 }}>Ops, você não tem Serviços cadastrados!</Text>
              </View>
              :
              servico.map(servico => {
                return (
                  <View key={servico.id} style={styles.servicos}>
                    <RectButton style={styles.buttonServico} onPress={() => handleNavigateToVisualizarServicos(servico.id)}>
                      <View style={styles.buttonGroupTextServico}>
                        <Text style={styles.buttonServicoText}>{servico.nome}</Text>
                        <Text style={styles.textInfo3}>{servico.local || "-----"}</Text>
                        <Text style={styles.textInfo3}>{servico.datafor}</Text>
                      </View>
                      
                    </RectButton>
                  </View>
                );
              })
          }
        </View>
      </View>
    </ScrollView>
  );
}
export default Servicos;
