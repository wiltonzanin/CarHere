import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TextInput, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from "react-native-dropdown-picker";
import { useRoute } from "@react-navigation/native";
import { CheckBox } from 'react-native-elements';

import styles from "./styles";
import TextField from "../../../../components/textField";
import BackScreen from "../../../../components/backScreen";
import { Button } from "../../../../components/buttons";
import LoadingScreen from "../../../../components/loadingScreen";
import { SuccessModal, FeedbackModal } from "../../../../components/feedbackModal";

import { darkTheme } from "../../../../Styles/colors";
import ServicoService from "../../../../database/services/ServicoService";
import CarroService from "../../../../database/services/carroService";
import { Feather } from "@expo/vector-icons";

interface EditServicoRouteParams {
  id: number;
  id_carro: number;
};

interface Servico {
  nome: string;
  local: string;
  id_carro: number;
  veiculo: string;
  quilometragem: string;
  data: string;
  valor_servico: string;
  descricao: string;
  status_servico: number;
}

interface Carros {
  id_carro: number;
  modelo: string;
  motorizacao: string;
  ano: number;
}

function CadastroServicos({ navigation }: any) {

  const route = useRoute();
  const params = route.params as EditServicoRouteParams;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [modalMensage, setModalMensage] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [carros, setCarros] = useState<Carros[]>([]);
  const [id_carro, setIdCarro] = useState('');
  const [name, setName] = useState("")
  const [local, setLocal] = useState("")
  const [ValorServico, setValorServico] = useState("")
  const [Quilometragem, setQuilometragem] = useState("")
  const [descricao, setDescricao] = useState("")
  var ServicoStatus = "";

  const [date, setDate] = useState(new Date()); //validação data
  const [show, setShow] = useState(false); //validação datapicker
  const [mode, setMode] = useState('date'); //validação datapicker

  const [ValidacaoNome, setValidacaoNome] = useState("");
  const [ValidacaoVeiculo, setValidacaoVeiculo] = useState("");

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  function FormataStringData(data: string) {
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];

    return ("0" + mes).slice(-2) + '/' + ("0" + dia).slice(-2) + '/' + ano;
  }

  useEffect(() => {
    if (params.id !== 0) {
      setCarregando(true);
      ServicoService.findServiceById(params.id)
        .then((response: any) => {
          response as Servico;
          setName(response.nome);
          setLocal(response.local);
          setQuilometragem(response.quilometragem.toString());
          setValorServico(response.valor_servico.toString());
          setDescricao(response.descricao);
          setDate(new Date(FormataStringData(response.data)));
          setIsSelected(response.status_servico)
          setCarregando(false);
        }).catch(() => {
        })
    }
  }, []);

  useEffect(() => {
    CarroService.findAll() //User ID
      .then((response: any) => {
        setCarros(response._array);
        setIdCarro(params.id_carro.toString())
      }).catch(() => {
      })
  }, []);

  var dataformatada = date.getDate().toString().padStart(2, '0') + "/";
  dataformatada += (date.getMonth() + 1).toString().padStart(2, '0') + "/";
  dataformatada += date.getFullYear().toString();

  if (isSelected == true) {
    ServicoStatus = "1"
  }
  else {
    ServicoStatus = "0"
  }

  function validacao() {
    // Nome
    !name ? setValidacaoNome('Nome não informado') : setValidacaoNome('');

    // Veiculo
    !id_carro ? setValidacaoVeiculo('Veiculo não informado') : setValidacaoVeiculo('');

    //após validação 
    if (!id_carro === false && !name === false) {
      params.id !== 0 ? handleUpdateServico() : CadastrarBanco();
    }
  }

  function CadastrarBanco() {
    try {
      const dataserv = (dataformatada.toString())
      ServicoService.addservico(name, local, Number(Quilometragem), dataserv, Number(ValorServico), descricao, Number(ServicoStatus), Number(id_carro));
      setModalMensage("Serviço cadastrado com sucesso!");
      setModalVisible(true);
      console.log("Cadastrou no banco1");
    } catch (error) {
      setModalMensage("Ops, tivemos um problema!"); //Não chega no catch
      setModalWarning(true);
    }
  }

  function handleUpdateServico() {
    ServicoService.updateServico(name, local, Number(Quilometragem), dataformatada.toString(), Number(ValorServico), descricao, Number(ServicoStatus), params.id);
    setModalMensage("Serviço atualizado com sucesso!");
    setModalVisible(true);
  }

  function handleNavigateToServico() {
    setModalVisible(!modalVisible);
    setCarregando(false);
    if (modalWarning == false) {
      navigation.navigate("Servico");
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
        funcaoOnRequestClose={handleNavigateToServico}
        mensage={modalMensage} />
      <FeedbackModal
        modalVisible={modalWarning}
        funcaoOnRequestClose={closeModal}
        mensage={modalMensage} />
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          {params.id !== 0
            ?
            <Text style={styles.title}>
              Atualizar serviço
            </Text>
            :
            <Text style={styles.title}>
              Cadastrar serviço
            </Text>
          }
          <View />
        </View>
        <View>
          <TextField
            labelName="Nome *"
            onChangeText={setName}
            value={name}
            mensagemErro={ValidacaoNome}
          />
          <TextField
            labelName="Local que foi realizado o serviço"
            onChangeText={setLocal}
            value={local}
          />
          <View style={styles.inputGroup}>
            <View style={styles.inputGroupSecondColumn}>
              <Text style={styles.text}>Veículo *</Text>
              <DropDownPicker
                dropDownStyle={styles.dropdownList}
                labelStyle={styles.dropdownText}
                arrowColor={darkTheme.grayLight}
                placeholder="Selecionar..."
                items={carros.map(carro => ({ label: carro.modelo + " " + carro.motorizacao + " " + carro.ano, value: carro.id_carro }))}
                style={styles.dropdown}
                onChangeItem={(item) => {
                  setIdCarro(item.value);
                }}>
              </DropDownPicker>
              {ValidacaoVeiculo === ''
                ?
                <View />
                :
                <Text style={styles.labelErro}><Feather name="alert-triangle" /> {ValidacaoVeiculo}</Text>
              }
            </View>
            <View style={styles.inputGroupColumn}>
              <TextField labelName="Quilometragem"
                maxLength={8}
                tipoTeclado={"numeric"}
                onChangeText={(text) => { setQuilometragem(text.replace(/[^,.0-9]/g, '')) }}
                value={Quilometragem}
                contextMenuHidden={true}
              />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <View style={styles.inputGroupSecondColumn}>
              <TextField
                value={dataformatada}
                labelName="Data"
                onTouchStart={showDatepicker}
              />
              <View>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
            </View>
            <View style={styles.inputGroupColumn}>
              <TextField labelName="Valor do serviço"
                maxLength={6}
                placeholder="R$ 0.000,00"
                placeholderTextColor={darkTheme.grayLight}
                tipoTeclado={"numeric"}
                onChangeText={(text) => { setValorServico(text.replace(/[^0-9]/g, '')) }}
                value={ValorServico}
                contextMenuHidden={true}
              />
            </View>
          </View>
          <Text style={styles.text}>Descrição do serviço realizado:</Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            textAlignVertical="top"
            onChangeText={setDescricao}
            value={descricao}
            maxLength={255}
          />
          <View style={styles.checkbox}>
            <CheckBox
              containerStyle={{ backgroundColor: darkTheme.background, borderColor: darkTheme.background, padding: 0, margin: 0, marginLeft: 0 }}
              checkedIcon='check-square-o'
              checkedColor={darkTheme.button}
              size={25}
              checked={isSelected}
              onPress={() => setIsSelected(!isSelected)}
            />
            <View style={styles.buttoncheckbox}>
              <Text style={styles.textcheckbox}>Serviço foi realizado</Text>
            </View>
          </View>
        </View>
        <Button title="Concluir" onPress={validacao} />
      </View>
    </ScrollView>
  );
}

export default CadastroServicos;
