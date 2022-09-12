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

function CadastroVeiculo({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const [marcas, setMarcas] = useState("");
  const [modelo, setModelo] = useState("");
  const [motorizacao, setMotorizacao] = useState("");
  const [ano, setAno] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [imageUri, setImageUri] = useState<string[]>([]);
  const [modalMensage, setModalMensage] = useState("");
  const [marcasapi, setMarcasapi] = useState([]);
  const [modelosapi, setModelosapi] = useState([]);
  const [urlapi, seturlapi] = useState("");


  useEffect(() => {
    api.get("marcas")
      .then((response) => {
        setMarcasapi(response.data)
        console.log(modelosapi)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  function teste(url: string) {
    useEffect(() => {
      api.get(url)
        .then((response) => {
          setModelosapi(response.data.modelos)
          console.log(modelosapi)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }, []);
  }
  const ano_value = [];
  for (var i = 1960; i <= 2024; i++) {
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

  function handleCreateVeiculo() {
    try {
      CarroService.addCarro(modelo, marcas, Number(ano), combustivel, motorizacao, imageUri);
      setModalMensage("Veículo cadastrado com sucesso!");
      setModalVisible(true);
    } catch (error) {
      setModalMensage("Ops, tivemos um problema!"); //Não chega no catch
      setModalWarning(true);
    }
  }


  // async function handleCreateVeiculo() {
  //   const data = new FormData();

  //   data.append("marca", marca);
  //   data.append("modelo", modelo);
  //   data.append("motorizacao", motorizacao);
  //   data.append("ano", ano);
  //   data.append("combustivel", combustivel);

  //   images.forEach((image, index) => {
  //     data.append("images", {
  //       name: `image_${index}.jpg`,
  //       type: "image/jpg",
  //       uri: image,
  //     } as any);
  //   });

  //   try {
  //     setCarregando(true)
  //     await api.post("/carros", data);
  //   } catch (error) {
  //     setCarregando(false);
  //     setModalMensage("");
  //     setModalWarning(true);
  //     return;
  //   }

  //   setModalMensage("Veículo cadastrado com sucesso!");
  //   setModalVisible(true);
  //onChangeText={setModelo} />
  // onChangeText={setMarca} }

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


  console.log(urlapi)
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
              setMarcas(item.value)
              seturlapi("/" + item.value + "/modelos")

            }}
          />
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
              setModelo(item.value)
              console.log(modelo);
            }}
          />

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
            ]}
            style={styles.dropdown}
            onChangeItem={(item) => {
              setCombustivel(item.value);
            }}
          ></DropDownPicker>
          <View style={styles.inputGroup}>
            <View style={styles.inputGroupColumn}>
              <TextField
                labelName="Motorização"
                tipoTeclado={"numeric"}
                onChangeText={setMotorizacao}
              />
            </View>
            <View style={styles.inputGroupSecondColumn}>
              <Text style={styles.text}>Ano</Text>
              <DropDownPicker
                placeholder=""
                dropDownStyle={styles.dropdownList}
                labelStyle={styles.dropdownText}
                arrowColor={darkTheme.grayLight}
                items={ano_value.reverse().map((option) => ({
                  label: option.label,
                  value: option.value,
                }))}
                style={styles.dropdown}
                onChangeItem={(item) => {
                  setAno(item.value)
                }}
              />
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
        <Button title="Concluir" onPress={handleCreateVeiculo} />
      </View>
    </ScrollView>
  );
}

export default CadastroVeiculo;
