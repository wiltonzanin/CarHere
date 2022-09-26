import React, { useEffect, useState } from "react";
import { View, Text, BackHandler, ScrollView } from "react-native";
import { DrawerActions, useNavigation, useFocusEffect, StackActions, useRoute } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { ButtonAdicionar } from "../../../components/buttons";
import { ButtonMenu } from "../../../components/buttons";
import LoadingScreen from "../../../components/loadingScreen";
import { darkTheme } from '../../../Styles/colors'
import fonts from '../../../Styles/fonts'
import ServicoService from "../../../database/services/ServicoService";
import { Searchbar } from "react-native-paper";

interface servico {
  id_servicos: number;
  nome: string;
  local: string;
  data: string;
  modelo: string;
}

function Servicos({ navigation }: any) {

  let listaVazia = true;

  const [carregando, setCarregando] = useState(false);
  const [erroCarregar, setErroCarregar] = useState(false);
  const [servico, setServico] = useState<servico[]>([]);
  const [search, setSearch] = useState(false);
  const [searchWord, setSearchWord] = useState('');

  const route = useRoute();

  const { navigate } = useNavigation();

  function handleNavigateToVisualizarServicos(id: number) {
    navigation.navigate("VisualizarServicos", { id });
  }

  function handleNavigateToCadastrarServicos() {
    navigation.navigate("CadastroServicos");
  }

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      setCarregando(true);
      ServicoService.findAll()
        .then((response: any) => {
          setServico(response._array);
          setCarregando(false);
        }).catch(() => {
          setCarregando(false);
          setErroCarregar(true);
        })
    });
  }, [navigation]);

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

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LoadingScreen carregando={carregando} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerGroup}>
            <ButtonMenu title="" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
            <Text style={styles.headerText}>Serviços</Text>
            <Feather name="search" size={25} color={darkTheme.grayLight} onPress={() => { setSearch(!search) }} />
          </View>
          {search ?
            <View>
              <Searchbar
                placeholder="Pesquisar"
                autoComplete={''}
                onChangeText={setSearchWord}
                value={searchWord}
                placeholderTextColor={darkTheme.grayLight}
                iconColor={darkTheme.grayLight}
                inputStyle={{ color: darkTheme.grayLight }}
                style={styles.searchInput}
              />
            </View>
            :
            <View />
          }
        </View>
        {search
          ?
          <View />
          :
          <ButtonAdicionar title="Adicionar Serviço" onPress={handleNavigateToCadastrarServicos} />
        }
        <View style={styles.contentServico}>
          {erroCarregar
            ?
            <View style={styles.listagemErroServico}>
              <Feather name='cloud-off' size={50} color={darkTheme.grayLight} />
              <Text style={{ color: darkTheme.grayLight, fontSize: 20, paddingTop: 20, fontFamily: fonts.text }}>Não foi possível carregar os dados!</Text>
            </View>
            :
            listaVazia
              ?
              <View style={styles.listagemErroServico}>
                <Feather name='archive' size={50} color={darkTheme.grayLight} />
                <Text style={{ color: 'white', fontSize: 20, paddingTop: 20 }}>Ops, você não tem Serviços cadastrados!</Text>
              </View>
              :
              servico.filter((val) => {
                if (searchWord == '') {
                  return val;
                } else if (val.nome.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())) {
                  return val;
                }
              }).map(servico => {
                return (
                  <RectButton key={servico.id_servicos} style={styles.buttonServico} onPress={() => handleNavigateToVisualizarServicos(servico.id_servicos)}>
                    <View style={styles.buttonGroupTextServico}>
                      <Text style={styles.buttonServicoText}>{servico.nome}</Text>
                      <Text style={styles.textInfo3}>{servico.modelo}</Text>
                      <Text style={styles.textInfo3}>{servico.local || "-----"}</Text>
                      <Text style={styles.textInfo3}>{servico.data}</Text>
                    </View>
                  </RectButton>
                );
              })
          }
        </View>
      </View>
    </ScrollView>
  );
}
export default Servicos;
