import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";

import api from "../../../services/api";
import styles from "./styles";
import TextField from "../../../components/textField";
import DropDownPicker from "react-native-dropdown-picker";
import BackScreen from "../../../components/backScreen";
import { Button } from "../../../components/buttons";
import LoadingScreen from "../../../components/loadingScreen";
import FeedbackModal from "../../../components/feedbackModal";

function CadastroVeiculo() {
  const { navigate } = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [motorizacao, setMotorizacao] = useState("");
  const [quilometragem, setQuilometragem] = useState("");
  const [ano, setAno] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [foto_carro, setFoto_carro] = useState("teste");

  async function handleCreateVeiculo() {
    const data = new FormData();

    data.append("marca", marca);
    data.append("modelo", modelo);
    data.append("motorizacao", motorizacao);
    data.append("ano", ano);
    data.append("combustivel", combustivel);
    data.append("km", quilometragem);
    data.append("fotoCarro", foto_carro);

    try {
      setCarregando(true)
      await api.post("/carros", data);
    } catch (error) {
      setCarregando(false)
      setModalWarning(true);
    }

    setModalVisible(true);
  }

  function handleNavigateToVeiculos() {
    setModalVisible(!modalVisible);
    setCarregando(false);
    if (modalWarning == false) {
      navigate("VeiculosCadastrados");
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LoadingScreen carregando={carregando} />
      <FeedbackModal
        modalVisible={modalVisible}
        funcaoOnRequestClose={handleNavigateToVeiculos}
        modalTypeWarning={modalWarning} />
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.title}>Cadastre seu veículo</Text>
          <View />
        </View>
        <View>
          <TextField labelName="Marca" funcaoOnChangeText={setMarca} />
          <TextField labelName="Modelo" funcaoOnChangeText={setModelo} />
          <View style={styles.inputGroup}>
            <View style={styles.inputGroupColumn}>
              <TextField labelName="Motorização" tipoTeclado={"numeric"} funcaoOnChangeText={setMotorizacao} />
            </View>
            <View style={styles.inputGroupSecondColumn}>
              <TextField labelName="Quilometragem" tipoTeclado={"numeric"} funcaoOnChangeText={setQuilometragem} />
            </View>
          </View>
          <View style={styles.inputGroup}>
            <View style={styles.inputGroupColumn}>
              <Text style={styles.text}>Ano</Text>
              <DropDownPicker
                placeholder=""
                dropDownStyle={styles.dropdown}
                labelStyle={styles.dropdownText}
                arrowColor={"#F0EFF4"}
                items={[
                  { label: "2022", value: "2022" },
                  { label: "2021", value: "2021" },
                  { label: "2020", value: "2020" },
                  { label: "2019", value: "2019" },
                  { label: "2018", value: "2018" },
                  { label: "2017", value: "2017" },
                  { label: "2016", value: "2016" },
                  { label: "2015", value: "2015" },
                  { label: "2014", value: "2014" },
                  { label: "2013", value: "2013" },
                  { label: "2012", value: "2012" },
                  { label: "2011", value: "2011" },
                  { label: "2010", value: "2010" },
                  { label: "2009", value: "2009" },
                  { label: "2008", value: "2008" },
                  { label: "2007", value: "2007" },
                  { label: "2006", value: "2006" },
                  { label: "2005", value: "2005" },
                  { label: "2004", value: "2004" },
                  { label: "2003", value: "2003" },
                  { label: "2002", value: "2002" },
                  { label: "2001", value: "2001" },
                  { label: "2000", value: "2000" },
                  { label: "1999", value: "1999" },
                  { label: "1998", value: "1998" },
                  { label: "1997", value: "1997" },
                  { label: "1996", value: "1996" },
                  { label: "1995", value: "1995" },
                  { label: "1994", value: "1994" },
                  { label: "1993", value: "1993" },
                  { label: "1992", value: "1992" },
                  { label: "1991", value: "1991" },
                  { label: "1990", value: "1990" },
                  { label: "1989", value: "1989" },
                  { label: "1988", value: "1988" },
                  { label: "1987", value: "1987" },
                  { label: "1986", value: "1986" },
                  { label: "1985", value: "1985" },
                  { label: "1984", value: "1984" },
                  { label: "1983", value: "1983" },
                  { label: "1982", value: "1982" },
                  { label: "1981", value: "1981" },
                  { label: "1980", value: "1980" },
                  { label: "1979", value: "1979" },
                  { label: "1978", value: "1978" },
                  { label: "1977", value: "1977" },
                  { label: "1976", value: "1976" },
                  { label: "1975", value: "1975" },
                  { label: "1974", value: "1974" },
                  { label: "1973", value: "1973" },
                  { label: "1972", value: "1972" },
                  { label: "1971", value: "1971" },
                  { label: "1970", value: "1970" },
                  { label: "1969", value: "1969" },
                  { label: "1968", value: "1968" },
                  { label: "1967", value: "1967" },
                  { label: "1966", value: "1966" },
                  { label: "1965", value: "1965" },
                  { label: "1964", value: "1964" },
                  { label: "1963", value: "1963" },
                  { label: "1962", value: "1962" },
                  { label: "1961", value: "1961" },
                  { label: "1960", value: "1960" },
                  { label: "", value: "" },
                ]}
                style={styles.dropdown}
                onChangeItem={(item) => { setAno(item.value) }}
              ></DropDownPicker>
            </View>
            <View style={styles.inputGroupSecondColumn}>
              <Text style={styles.text}>Combustível</Text>
              <DropDownPicker
                placeholder="Selecione um item"
                dropDownStyle={styles.dropdown}
                labelStyle={styles.dropdownText}
                arrowColor={"#F0EFF4"}
                items={[
                  { label: "Gasolina", value: "gasolina" },
                  { label: "Alcool", value: "alcool" },
                  { label: "Diesel", value: "Diesel" },
                  { label: "Flex", value: "Flex" },
                  { label: "Hibrido", value: "Hibrido" },
                  { label: "Elétrico", value: "Eletrico" },
                ]}
                style={styles.dropdown}
                onChangeItem={(item) => { setCombustivel(item.value) }}
              ></DropDownPicker>
            </View>
          </View>
        </View>
        <Button title="Concluir" onPress={handleCreateVeiculo} />
      </View>
    </ScrollView>
  );
}

export default CadastroVeiculo;
