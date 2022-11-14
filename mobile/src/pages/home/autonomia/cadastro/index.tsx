import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { MaterialIcons } from '@expo/vector-icons';

import styles from "./styles";
import BackScreen from "../../../../components/backScreen";
import TextField from "../../../../components/textField";
import LoadingScreen from "../../../../components/loadingScreen";
import { Button } from "../../../../components/buttons";
import { SuccessModal, FeedbackModal, ErrorModal } from "../../../../components/feedbackModal";
import { darkTheme } from '../../../../Styles/colors';
import CarroService from "../../../../database/services/carroService";
import AutonomiaService from "../../../../database/services/autonomiaService";
import { async } from "@firebase/util";

interface AutonomiaRouteParams {
    id_autonomia: number;
};

interface IAutonomia {
    km_inicial: number;
    km_final: number;
    tipo_combustivel: string;
    litros_abastecidos: number;
    percurso: string;
    media_consumo: number;
    id_carro: number;
}

interface Carros {
    id_carro: number;
    modelo: string;
}

function Autonomia({ navigation }: any) {

    const route = useRoute();
    const params = route.params as AutonomiaRouteParams;

    const [carregando, setCarregando] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalWarning, setModalWarning] = useState(false);
    const [modalErro, setModalErro] = useState(false);
    const [modalMensage, setModalMensage] = useState("");

    const [carroId, setCarroId] = useState(0);
    const [carros, setCarros] = useState<Carros[]>([]);
    const [carro, setCarro] = useState("");
    const [kmInicial, setkmInicial] = useState("");
    const [kmFinal, setkmFinal] = useState("");
    const [litrosAbastecidos, setLitrosAbastecidos] = useState("");
    const [combustivel, setCombustivel] = useState("");
    const [percurso, setPercurso] = useState("");
    var mediaConsumo = 0;

    React.useEffect(() => {
        navigation.addListener('focus', () => {
            CarroService.findAll()
                .then((response: any) => {
                    setCarros(response._array);
                    if (response._array.length === 0) {
                        setModalWarning(true);
                        setModalMensage("Você deve cadastrar um veículo primeiro!");
                    }
                }), (error: any) => {
                    console.log(error);
                }
        });
    }, [navigation]);

    useEffect(() => {
        if (params.id_autonomia !== 0) {
            setCarregando(true)
            AutonomiaService.findAutonomiaById(params.id_autonomia)
                .then((response: any) => {
                    response as IAutonomia
                    setkmInicial(response.km_inicial);
                    setkmFinal(response.km_final);
                    setLitrosAbastecidos(response.litros_abastecidos);
                    setPercurso(response.percurso);
                    setCombustivel(response.tipo_combustivel);
                    setCarroId(response.id_carro);
                    setCarregando(false)
                })
        }
    }, []);

    const kmRodados = Number(kmFinal) - Number(kmInicial);
    if (kmRodados > 0 && Number(litrosAbastecidos) > 0) {
        mediaConsumo = kmRodados / Number(litrosAbastecidos);
        mediaConsumo = Number(mediaConsumo.toFixed(2))
    }

    function handleCreateAutonomia() {

        if (carro === '' || kmInicial === '' || kmFinal === '' || litrosAbastecidos == '' || percurso === '' || combustivel === '') {
            setModalMensage('Por favor preencha todos os campos!');
            setModalErro(true);
            return;
        }

        try {
            AutonomiaService.addAutonomia(Number(kmInicial), Number(kmFinal), combustivel, Number(litrosAbastecidos), percurso, mediaConsumo, Number(carro));
            setModalMensage("Autonomia cadastrada com sucesso!");
            setModalVisible(true);
        } catch (error) {
            setModalMensage("Ops, tivemos um problema!");
            setModalWarning(true);
        }
    }

    function handleEditAutonomia() {
        try {
            AutonomiaService.editAutonomia(Number(kmInicial), Number(kmFinal), combustivel, Number(litrosAbastecidos), percurso, mediaConsumo, params.id_autonomia);
            setModalMensage("Autonomia autualizada com sucesso!");
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

    function handleNavigateToAutonomia() {
        setModalVisible(!modalVisible);
        setCarregando(false);
        if (modalWarning == false) {
            navigation.navigate("ListaAutonomia", { id_carro: carroId });
        }
    }

    function closeModal() {
        if (carros.length == 0) {
            navigation.navigate("CadastroVeiculo");
            return;
        }
        setModalErro(false);
        setModalWarning(false);
        setCarregando(false);
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <LoadingScreen carregando={carregando} />
            <SuccessModal
                modalVisible={modalVisible}
                funcaoOnRequestClose={params.id_autonomia !== 0 ? handleNavigateToAutonomia : handleNavigateToVeiculos}
                mensage={modalMensage} />
            <FeedbackModal
                modalVisible={modalWarning}
                funcaoOnRequestClose={closeModal}
                mensage={modalMensage} />
            <ErrorModal
                modalVisible={modalErro}
                funcaoOnRequestClose={closeModal}
                mensage={modalMensage} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <BackScreen />
                    <Text style={styles.title}>Autonomia</Text>
                    <View />
                </View>
                <View>
                    <View>
                        {params.id_autonomia !== 0
                            ?
                            <View />
                            :
                            <View style={{ marginBottom: 20 }}>
                                <View>
                                    <Text style={styles.text}>Veículo</Text>
                                    <DropDownPicker
                                        placeholder="Selecione um item"
                                        dropDownStyle={styles.dropdownList}
                                        labelStyle={styles.dropdownText}
                                        arrowColor={darkTheme.grayLight}
                                        items={carros.map(carro => ({ label: carro.modelo, value: carro.id_carro }))}
                                        style={styles.dropdown}
                                        onChangeItem={(item) => {
                                            setCarro(item.value);
                                        }} />
                                </View>
                            </View>
                        }

                    </View>
                    <View style={styles.inputGroup}>
                        <View style={styles.inputGroupColumn}>
                            <TextField labelName="Km incial" onChangeText={(text) => { setkmInicial(text.replace(/[^0-9]/g, '')) }} keyboardType={'numeric'} value={kmInicial.toString()} contextMenuHidden={true} />
                        </View>
                        <View style={styles.inputGroupSecondColumn}>
                            <TextField labelName="Km final" onChangeText={(text) => { setkmFinal(text.replace(/[^0-9]/g, '')) }} keyboardType={'numeric'} value={kmFinal.toString()} contextMenuHidden={true} />
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <View style={styles.inputGroupColumn}>
                            <TextField labelName="Litros abastecidos" onChangeText={(text) => { setLitrosAbastecidos(text.replace(/[^0-9]/g, '')) }} keyboardType={'numeric'} value={litrosAbastecidos.toString()} contextMenuHidden={true} maxLength={3} />
                        </View>
                        <View style={styles.inputGroupSecondColumn}>
                            <Text style={styles.text}>Percurso</Text>
                            <DropDownPicker
                                placeholder="Selecione"
                                dropDownStyle={styles.dropdownList}
                                labelStyle={styles.dropdownText}
                                arrowColor={darkTheme.grayLight}
                                defaultValue={percurso}
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
                        defaultValue={combustivel}
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
                        <Text style={styles.textResultado}>
                            <MaterialIcons name="local-gas-station" size={26} /> {mediaConsumo} Km/L
                        </Text>
                    </View>
                </View>
                {params.id_autonomia !== 0
                    ?
                    <Button title="Atualizar" onPress={handleEditAutonomia} />
                    :
                    <Button title="Salvar" onPress={handleCreateAutonomia} />
                }
            </View>
        </ScrollView >
    );
}

export default Autonomia;
