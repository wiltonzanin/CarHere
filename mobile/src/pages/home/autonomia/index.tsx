import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { DrawerActions, useRoute } from "@react-navigation/native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

import BackScreen from "../../../components/backScreen";
import TextField from "../../../components/textField";
import LoadingScreen from "../../../components/loadingScreen";
import { Button } from "../../../components/buttons";
import { SuccessModal, FeedbackModal } from "../../../components/feedbackModal";
import api from "../../../services/api";
import {darkTheme} from '../../../Styles/colors'


interface Carros {
    id: number;
    modelo: string;
}

function Autonomia({ navigation }: any) {

    const [carregando, setCarregando] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalWarning, setModalWarning] = useState(false);
    const [modalMensage, setModalMensage] = useState("");


    const [carros, setCarros] = useState<Carros[]>([]);
    const [carro, setCarro] = useState("");
    const [kmInicial, setkmInicial] = useState("");
    const [kmFinal, setkmFinal] = useState("");
    const [litrosAbastecidos, setLitrosAbastecidos] = useState("");
    const [combustivel, setCombustivel] = useState("");
    const [percurso, setPercurso] = useState("");

    const kmRodados = Number(kmFinal) - Number(kmInicial);
    var mediaConsumo = 0;
    if (kmRodados > 0 && Number(litrosAbastecidos) > 0) {
        mediaConsumo = kmRodados / Number(litrosAbastecidos);
        mediaConsumo = Number(mediaConsumo.toFixed(2))
    }

    useEffect(() => {

        api.get('carros/1').then(response => {
            setCarros(response.data);
        })
    }, [])

    async function handleCreateAutonomia() {
        const data = new FormData();

        data.append("kmInicial", kmInicial);
        data.append("kmFinal", kmFinal);
        data.append("litroAbastecidos", litrosAbastecidos);
        data.append("tipoCombustivel", combustivel);
        data.append("percurso", percurso);
        data.append("mediaConsumo", mediaConsumo.toString());
        data.append("carro", carro);

        try {
            setCarregando(true)
            await api.post("/autonomia", data);
        } catch (error) {
            setCarregando(false);
            setModalMensage("");
            setModalWarning(true);
            return;
        }

        setModalMensage("Autonomia do veículo cadastrada com sucesso!");
        setModalVisible(true);
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
                mensage={modalMensage} />
            <FeedbackModal
                modalVisible={modalWarning}
                funcaoOnRequestClose={closeModal}
                mensage={modalMensage} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <BackScreen />
                    <Text style={styles.title}>Autonomia</Text>
                    <View />
                </View>
                <View>
                    <Text style={styles.text}>Veículo</Text>
                    <DropDownPicker
                        placeholder="Selecione um item"
                        dropDownStyle={styles.dropdownList}
                        labelStyle={styles.dropdownText}
                        arrowColor={darkTheme.grayLight}
                        items={carros.map(carro => ({ label: carro.modelo, value: carro.id }))}
                        style={styles.dropdown}
                        onChangeItem={(item) => {
                            setCarro(item.value);
                        }}
                    ></DropDownPicker>
                    <View style={styles.inputGroup}>
                        <View style={styles.inputGroupColumn}>
                            <TextField labelName="Km incial" onChangeText={setkmInicial} />
                        </View>
                        <View style={styles.inputGroupSecondColumn}>
                            <TextField labelName="Km final" onChangeText={setkmFinal} />
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <View style={styles.inputGroupColumn}>
                            <TextField labelName="Litros abastecidos" onChangeText={setLitrosAbastecidos} />
                        </View>
                        <View style={styles.inputGroupSecondColumn}>
                            <Text style={styles.text}>Percurso</Text>
                            <DropDownPicker
                                placeholder="Selecione"
                                dropDownStyle={styles.dropdownList}
                                labelStyle={styles.dropdownText}
                                arrowColor={darkTheme.grayLight}
                                items={[
                                    { label: "Rodoviário", value: "Rodoviário" },
                                    { label: "Urbano", value: "Urbano" },
                                    { label: "Misto", value: "Misto" },
                                ]}
                                style={styles.dropdown}
                                onChangeItem={(item) => { setPercurso(item.value) }}
                            ></DropDownPicker>
                        </View>
                    </View>
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
                        ]}
                        style={styles.dropdown}
                        onChangeItem={(item) => { setCombustivel(item.value) }}
                    ></DropDownPicker>
                    <View style={styles.consumoMedio}>
                        <Text style={styles.text}>Consumo médio:</Text>
                        <Text style={styles.textResultado}>{mediaConsumo} Km/L</Text>
                    </View>
                </View>
                <Button title="Salvar" onPress={handleCreateAutonomia} />
            </View>
        </ScrollView>
    );
}

export default Autonomia;
