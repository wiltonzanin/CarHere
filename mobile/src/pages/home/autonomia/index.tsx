import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { DrawerActions, useRoute } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

import BackScreen from "../../../components/backScreen";
import TextField from "../../../components/textField";
import { Button } from "../../../components/buttons";
import api from "../../../services/api";

interface Carros {
    id: number;
    modelo: string;
}

function visualizarVeiculo({ navigation }: any) {

    const [carros, setCarros] = useState<Carros[]>([]);
    const [carro, setCarro] = useState("");
    const [kmInicial, setkmInicial] = useState("");
    const [kmFinal, setkmFinal] = useState("");
    const [litrosAbastecidos, setLitrosAbastecidos] = useState("");
    const [combustivel, setCombustivel] = useState("");

    const kmRodados = Number(kmFinal) - Number(kmInicial);
    var mediaConsumo = 0;
    if (kmRodados > 0 && Number(litrosAbastecidos) > 0) {
        mediaConsumo = kmRodados / Number(litrosAbastecidos);
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
        data.append("carro", carro);

        console.log(data)
        try {
            //setCarregando(true)
            await api.post("/autonomia", data);
        } catch (error) {
            console.log("Eh não deu")
            // setCarregando(false);
            // setModalMensage("");
            // setModalWarning(true);
        }

        //setModalVisible(true);
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                        arrowColor={"#F0EFF4"}
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
                    <TextField labelName="Litros abastecidos" onChangeText={setLitrosAbastecidos} />
                    <Text style={styles.text}>Combustível</Text>
                    <DropDownPicker
                        placeholder="Selecione um item"
                        dropDownStyle={styles.dropdownList}
                        labelStyle={styles.dropdownText}
                        arrowColor={"#F0EFF4"}
                        items={[
                            { label: "Gasolina", value: "gasolina" },
                            { label: "Alcool", value: "alcool" },
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

export default visualizarVeiculo;
