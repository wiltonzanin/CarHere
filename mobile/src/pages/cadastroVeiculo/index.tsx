import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
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

function StatusNet() {
  var teste
  NetInfo.addEventListener(state => {
    teste = state.isConnected;
  });
  return teste
}

function CadastroVeiculo({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const [motorizacao, setMotorizacao] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [imageUri, setImageUri] = useState<string[]>([]);
  const [modalMensage, setModalMensage] = useState("");
  const [marcas, setMarcas] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");

  const [anoapi, setAnoapi] = useState<IApi[]>([]);
  const [marcasapi, setMarcasapi] = useState<IApi[]>([]);
  const [modelosapi, setModelosapi] = useState<IApi[]>([]);
  const [codigomarca, setcodigomarca] = useState("");
  const [codigomodelo, setcodigomodelo] = useState("");
  const [urlapi, seturlapi] = useState("");
  const [urlapiano, seturlapiano] = useState("");

  const [urlapifip, seturlapifip] = useState("");
  const [fipmodelo, setfipmodelo] = useState("");

  const [valmarca, setvalmarca] = useState("");
  const [valmodelo, setvalmodelo] = useState("");
  const [valano, setvalano] = useState("");
  const [valmotorizacao, setvalmotorizacao] = useState("");
  const [valcombustivel, setvalcombustivel] = useState("");
  const [CurrentYear, setCurrentYear] = useState(0);
  const [date, setDate] = useState(new Date());

  if (StatusNet() === false) {
    setModalMensage("Necessario estar conectado a internet para continuar!");
    setModalVisible(true);
  }

  function Validacao() {
    //Marca
    !marcas ? setvalmarca("Marca não foi preenchido") : setvalmarca('')
    //Modelo
    !modelo ? setvalmodelo("Modelo não foi preenchido") : setvalmodelo('')
    //Ano
    if (ano == "") {
      setvalano("Ano não foi preenchido")
    } else {
      var limiteAno = (date.getFullYear() + 3)
      parseInt(ano, CurrentYear);
      if (CurrentYear > limiteAno && CurrentYear < 1920) {
        setvalano("Ano do carro inconsistente")
      } else {
        setvalano('')
      }
    }
    //Motorização
    !motorizacao ? setvalmotorizacao("Motorização não foi preenchido") : setvalmotorizacao('')
    //Combustivel
    !combustivel ? setvalcombustivel("Combustivel não foi preenchido") : setvalcombustivel('')
    //Valida todos os campos
    if (!marcas === false && !modelo === false && !combustivel === false && !ano === false) {
      handleCreateVeiculo()
    } else {
      setModalMensage("Preencha os campos obrigatórios!");
      setModalWarning(true);
    }
  }

  useEffect(() => {
    api.get("marcas")
      .then((response) => {
        setMarcasapi(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  useEffect(() => {
    if (marcas !== "") {
      api.get(urlapi)
        .then((response) => {
          setModelosapi(response.data.modelos)
        })
      setvalmarca('')
    }
  }, [marcas]);

  useEffect(() => {
    if (modelo !== "") {
      api.get(urlapiano)
        .then((response) => {
          setAnoapi(response.data)
        })
      setvalmodelo('')
    }
  }, [modelo]);

  /* useEffect(() => {
     if(ano !== ""){
       api.get(urlapifip)
       .then((response) => {
         setfipmodelo(response.data)
       })
     }
   }, [ano]);*/


  //const ano_value = [];
  //for (var i = 1960; i <= 2022; i++) {
  //ano_value.push({ label: "" + i, value: "" + i });
  // console.log(ano_value);
  //}

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
        "Opa, precisamos da permissão de acesso a galeria para que possamos salvar as imagens :)"
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
      .catch(error => { console.error(error) })
  }

  async function handleCreateVeiculo() {
    try {
      CarroService.addCarro(modelo, marcas, Number(ano), combustivel, motorizacao, imageUri);
      setModalMensage("Veículo cadastrado com sucesso!");
      setModalVisible(true);
    } catch (error) {
      setModalMensage("Ops, tivemos um problema!"); //Não chega no catch
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
          <BackScreen />
          <Text style={styles.title}>Cadastre seu veículo</Text>
          <View />
        </View>
        <View style={{ paddingBottom: 20 }}>
          <Text style={styles.text}>Marca</Text>
          <DropDownPicker
            placeholder=""
            dropDownStyle={styles.dropdownList}
            labelStyle={styles.dropdownText}
            arrowColor={darkTheme.grayLight}
            items={marcasapi.map(marcasapi => ({
              label: marcasapi.nome,
              value: marcasapi.codigo,
            }))}

            style={styles.dropdown}
            onChangeItem={(item) => {
              setMarcas(item.label)
              setcodigomarca(item.value)
              seturlapi("marcas/" + item.value + "/modelos")
            }}
          />
          {valmarca === ''
            ?
            <View />
            :
            <Text style={styles.labelErro}><Feather name="alert-triangle" /> {valmarca}</Text>
          }
          <Text style={styles.text}>Modelo</Text>
          <DropDownPicker
            placeholder=""
            dropDownStyle={styles.dropdownList}
            labelStyle={styles.dropdownText}
            arrowColor={darkTheme.grayLight}
            items={modelosapi.map(modelosapi => ({
              label: modelosapi.nome,
              value: modelosapi.codigo,
            }))}

            style={styles.dropdown}
            onChangeItem={(item) => {
              setModelo(item.label)
              setcodigomodelo(item.value)
              seturlapiano("marcas/" + codigomarca + "/modelos/" + item.value + "/anos")
            }}
          />
          {valmodelo === ''
            ?
            <View />
            :
            <Text style={styles.labelErro}><Feather name="alert-triangle" /> {valmodelo}</Text>
          }
          <Text style={styles.text}>Combustível</Text>
          <DropDownPicker
            placeholder="Selecione um item"
            dropDownStyle={styles.dropdownList}
            labelStyle={styles.dropdownText}
            arrowColor={darkTheme.grayLight}
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
          {valcombustivel === ''
            ?
            <View />
            :
            <Text style={styles.labelErro}><Feather name="alert-triangle" /> {valcombustivel}</Text>
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
              {valmotorizacao === ''
                ?
                <View />
                :
                <Text style={styles.labelErro}><Feather name="alert-triangle" /> {valmotorizacao}</Text>
              }
            </View>
            <View style={styles.inputGroupSecondColumn}>
              <Text style={styles.text1}>Ano</Text>
              <DropDownPicker
                placeholder=""
                dropDownStyle={styles.dropdownList}
                labelStyle={styles.dropdownText}
                arrowColor={darkTheme.grayLight}
                items={anoapi.map(anoapi => ({
                  label: anoapi.nome.substr(0, 4),
                  value: anoapi.codigo.substr(0, 4),

                }))}
                style={styles.dropdown}
                onChangeItem={(item) => {
                  setAno(item.value)
                  seturlapifip("marcas/" + codigomarca + "/modelos/" + codigomodelo + "/anos/" + item.value)
                }}
              />
              {valano === ''
                ?
                <View />
                :
                <Text style={styles.labelErro}><Feather name="alert-triangle" /> {valano}</Text>
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
        <Button title="Concluir" onPress={Validacao} />
      </View>
    </ScrollView>
  );
}

export default CadastroVeiculo;
