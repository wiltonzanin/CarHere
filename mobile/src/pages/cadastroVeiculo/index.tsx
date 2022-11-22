import React, { useEffect, useState } from "react";
import { StackActions, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, ScrollView, TouchableOpacity, Image, BackHandler } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import styles from "./styles";
import * as FileSystem from 'expo-file-system';

import TextField from "../../components/textField";
import DropDownPicker from "react-native-dropdown-picker";
import BackScreen from "../../components/backScreen";
import { Button } from "../../components/buttons";
import LoadingScreen from "../../components/loadingScreen";
import { SuccessModal, FeedbackModal } from "../../components/feedbackModal";
import { Feather } from "@expo/vector-icons";

import { darkTheme } from "../../Styles/colors";
import CarroService from "../../database/services/carroService";
import api from "../../services/api";
import NetInfo from "@react-native-community/netinfo";
import { getAuth } from "firebase/auth";
import { FirebaseInit } from '../../database/Firebase';

FirebaseInit();

interface IApi {
  nome: string;
  codigo: string;
}

interface EditCarRouteParams {
  id: number;
};

interface ICarro {
  marca: string;
  modelo: string;
  combustivel: number;
  motorizacao: string;
  ano: string;
}

function StatusNet() {
  var teste
  NetInfo.addEventListener(state => {
    teste = state.isConnected;
  });
  return teste
}

function CadastroVeiculo({ navigation }: any) {

  const route = useRoute();
  const params = route.params as EditCarRouteParams;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const [marcas, setMarcas] = useState("");
  const [modelo, setModelo] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [motorizacao, setMotorizacao] = useState("");
  const [ano, setAno] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [imageUri, setImageUri] = useState<string[]>([]);
  const [modalMensage, setModalMensage] = useState("");

  const [marcasapi, setMarcasapi] = useState<IApi[]>([]);
  const [modelosapi, setModelosapi] = useState<IApi[]>([]);

  const [urlapi, seturlapi] = useState("");

  const [CurrentYear, setCurrentYear] = useState(0);
  const [date, setDate] = useState(new Date());
  const [validacao, setValidacao] = useState(0);

  if (StatusNet() === false) {
    setModalMensage("É necessário estar conectado a internet para continuar!");
    setModalVisible(true);
  }

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

  function Validacao() {
    //Ano
    setValidacao(1)
    parseInt(ano, CurrentYear);
    if (CurrentYear > limiteAno && CurrentYear < 1920) {
      setModalMensage("Ano do carro inconsistente")
    } else {
      if (!marcas === false && !modelo === false && !combustivel === false && !ano === false && !motorizacao === false) {
        params.id == 0 ? handleCreateVeiculo() : handleEditCar();
      } else {
        setModalMensage("Preencha os campos obrigatórios!");
        setModalWarning(true);
      }
    }
  }

  function handleEditCar() {
    try {
      CarroService.editCar(modelo, marcas, Number(ano), combustivel, motorizacao, params.id);
      setModalMensage("Veículo atualizado com sucesso!");
      setModalVisible(true);
    } catch (error) {
      setModalMensage("Ops, tivemos um problema!");
      setModalWarning(true);
    }
  }

  useEffect(() => {
    //if (StatusNet()===true) {
      api.get("marcas")
        .then((response) => {
          setMarcasapi(response.data)
        })
    //}

  }, []);

  useEffect(() => {
    if (marcas !== "" && StatusNet()) {
      api.get(urlapi)
        .then((response) => {
          setModelosapi(response.data.modelos)
        })
    }
  }, [marcas]);

  useEffect(() => {
    if (params.id !== 0) {
      setCarregando(true);
      CarroService.findCarById(params.id)
        .then((response: any) => {
          response as ICarro;
          setMarcas(response.marca);
          setModelo(response.modelo);
          setCombustivel(response.combustivel);
          setMotorizacao(response.motorizacao);
          //setAno(response.ano);
          setCarregando(false);
        }).catch(() => {
        })
    }
  }, [params.id]);

  var limiteAno = (date.getFullYear() + 3)
  const ano_value = [];
  for (var i = limiteAno; i >= 1960; i--) {
    ano_value.push({ label: "" + i, value: "" + i });
  }

  function handleDeletePhotos() {
    setImages([]);
  }

  async function handleSelecionarFoto() {

    const CAR_PHOTO_DIR = FileSystem.documentDirectory + 'carPhotos';
    const folderInfo = await FileSystem.getInfoAsync(CAR_PHOTO_DIR);
    if (!folderInfo.exists) {
      await FileSystem.makeDirectoryAsync(CAR_PHOTO_DIR);
    }

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      setModalMensage(
        "Opa, precisamos da permissão de acesso a galeria para que possamos salvar as imagens"
      );
      setModalWarning(true);
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }

    const { uri } = result;

    setImages([...images, uri])

    if (images.length >= 4) {
      setDisableButton(true);
    }

    const imageName = `${Date.now()}.jpg`;
    const NEW_PHOTO_URI = `${CAR_PHOTO_DIR}/${imageName}`;

    await FileSystem.copyAsync({
      from: uri,
      to: NEW_PHOTO_URI
    })
      .then(() => {
        //console.log(`File ${uri} was saved as ${NEW_PHOTO_URI}`)
        setImageUri([...imageUri, NEW_PHOTO_URI]);
      })
    // .catch(error => { console.error(error) })
  }

  function handleCreateVeiculo() {
    try {
      CarroService.addCarro(modelo, marcas, Number(ano), combustivel, motorizacao, imageUri);
      setModalMensage("Veículo cadastrado com sucesso!");
      setModalVisible(true);
    } catch (error) {
      setModalMensage("Ops, tivemos um problema!");
      setModalWarning(true);
    }
  }

  function handleNavigateToVeiculos() {
    setModalVisible(!modalVisible);
    setCarregando(false);
    if (modalWarning == false) {
      navigation.navigate("VeiculosCadastrados");
    }
  }

  function closeModal() {
    setModalWarning(false);
    setCarregando(false);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LoadingScreen carregando={carregando} />
      <SuccessModal
        modalVisible={modalVisible}
        funcaoOnRequestClose={handleNavigateToVeiculos}
        mensage={modalMensage}
      />
      <FeedbackModal
        modalVisible={modalWarning}
        funcaoOnRequestClose={closeModal}
        mensage={modalMensage}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen backToHome={true} />
          <Text style={styles.title}>Cadastre seu veículo</Text>
          <View />
        </View>
        <View style={{ paddingBottom: 20 }}>
          <Text style={styles.text}>Marca</Text>
          <TextField
            style={styles.textFieldMarca}
            labelName=""
            value={marcas}
            onChangeText={setMarcas}>
          </TextField>
          {StatusNet() === false
            ?
            <View>
            </View>
            :
            <View style={styles.ViewdropdownCount}>
              <DropDownPicker
                placeholder=""
                containerStyle={styles.dropdownCount1}
                dropDownStyle={styles.dropdownList1}
                labelStyle={styles.dropdownText}
                arrowColor={darkTheme.grayLight}
                items={marcasapi.map(marcasapi => ({
                  label: marcasapi.nome,
                  value: marcasapi.codigo,
                }))}
                style={styles.dropdown}
                onChangeItem={(item) => {
                  setMarcas(item.label)
                  //setcodigomarca(item.value)
                  seturlapi("marcas/" + item.value + "/modelos")
                }}
              />
            </View>
          }
          {!marcas && validacao === 1
            ?
            <Text style={styles.labelErro}><Feather name="alert-triangle" /> {"Marca não foi preenchido"}</Text>
            :
            <View />
          }
          <Text style={styles.text}>Modelo</Text>
          <TextField
            style={styles.textFieldMarca}
            labelName=""
            value={modelo}
            onChangeText={setModelo}>
          </TextField>
          {StatusNet() === false
            ?
            <View></View>
            :
            <View style={styles.ViewdropdownCount}>
              <DropDownPicker
                placeholder=""
                containerStyle={styles.dropdownCount1}
                dropDownStyle={styles.dropdownList1}
                labelStyle={styles.dropdownText}
                arrowColor={darkTheme.grayLight}
                items={modelosapi.map(modelosapi => ({
                  label: modelosapi.nome,
                  value: modelosapi.codigo,
                }))}
                style={styles.dropdown}
                onChangeItem={(item) => {
                  setModelo(item.label)
                  //setcodigomodelo(item.value)
                  //seturlapiano("marcas/" + codigomarca + "/modelos/" + item.value + "/anos")
                }}
              />
            </View>
          }
          {!modelo && validacao === 1
            ?
            <Text style={styles.labelErro}><Feather name="alert-triangle" /> {"Modelo não foi preenchido"}</Text>
            :
            <View />
          }
          <Text style={styles.text}>Combustível</Text>
          <DropDownPicker
            placeholder=""
            dropDownStyle={styles.dropdownList}
            labelStyle={styles.dropdownText}
            arrowColor={darkTheme.grayLight}
            defaultValue={combustivel}
            items={[
              { label: "Gasolina", value: "Gasolina" },
              { label: "Alcool", value: "Alcool" },
              { label: "Diesel", value: "Diesel" },
              { label: "Flex", value: "Flex" },
              { label: "Hibrido", value: "Hibrido" },
              { label: "Elétrico", value: "Eletrico" },
              { label: "GNV", value: "GNV" },
            ]}
            style={styles.dropdown}
            onChangeItem={(item) => {
              setCombustivel(item.value);
            }}
          ></DropDownPicker>
          {!combustivel && validacao === 1
            ?
            <Text style={styles.labelErro}><Feather name="alert-triangle" /> {"Combustivel não foi preenchido"}</Text>
            :
            <View />
          }
          <View style={styles.inputGroup}>
            <View style={styles.inputGroupColumn}>
              <TextField
                labelName="Motorização"
                tipoTeclado={"numeric"}
                onChangeText={(text) => { setMotorizacao(text.replace(/[^.0-9]/g, '')) }}
                value={motorizacao}
                contextMenuHidden={true}
              />
              {!motorizacao && validacao === 1
                ?
                <Text style={styles.labelErro}><Feather name="alert-triangle" /> {"Motorização não foi preenchido"}</Text>
                :
                <View />
              }
            </View>
            <View style={styles.inputGroupSecondColumn}>
              <Text style={styles.text1}>Ano</Text>
              {console.log(ano)}
              <DropDownPicker
                placeholder=""
                defaultValue={ano}
                dropDownStyle={styles.dropdownList}
                labelStyle={styles.dropdownText}
                arrowColor={darkTheme.grayLight}
                items={ano_value.map((option) => ({
                  label: option.label,
                  value: option.value,
                }))}
                style={styles.dropdown}
                onChangeItem={(item) => {
                  setAno(item.value)
                }}
              />
              {!ano && validacao === 1
                ?
                <Text style={styles.labelErro}><Feather name="alert-triangle" /> {"Ano não foi preenchido"}</Text>
                :
                <View />
              }
            </View>
          </View>
          <View style={styles.labelGroup}>
            <Text style={styles.text}>Fotos</Text>
            <Text style={styles.labelOpcional}>(Opcional)</Text>
          </View>
          <ScrollView horizontal>
            {images.map((images) => {
              return (
                <Image
                  key={images}
                  source={{ uri: images }}
                  style={styles.carImages}
                />
              );
            })}
            <TouchableOpacity
              onPress={handleSelecionarFoto}
              disabled={disableButton}
              style={disableButton ? { display: "none" } : styles.imageSelector}
            >
              <Feather name="plus" size={40} color={darkTheme.grayLight} />
            </TouchableOpacity>
            {images.length > 0 && (
              <TouchableOpacity
                onPress={handleDeletePhotos}
                style={styles.buttonDelete}
              >
                <Feather name="trash" size={30} color={darkTheme.button} />
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
        {params.id !== 0
          ?
          <Button title="Atualizar" onPress={Validacao} />
          :
          <Button title="Concluir" onPress={Validacao} />
        }
      </View>
    </ScrollView>
  );
}

export default CadastroVeiculo;
