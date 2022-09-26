import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import TextField from '../../components/textField';
import BackScreen from '../../components/backScreen';
import { Button } from '../../components/buttons';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { FirebaseInit } from '../../database/Firebase';
import { SuccessModal, FeedbackModal } from "../../components/feedbackModal";
import LoadingScreen from "../../components/loadingScreen";

FirebaseInit();

const auth = getAuth();

function RecuperarSenha({ navigation }: any) {

    const [Email, setEmail] = useState("");
    const [modalMensage, setModalMensage] = useState("");
    const [modalWarning, setModalWarning] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    
    function handleRecuperarSenha() {
        sendPasswordResetEmail(auth, Email, undefined)
          .then(() => {
            setModalMensage("E-mail enviado, por favor verificar a caixa de lixo eletronico");
            setModalVisible(true);
          }).catch((error) => {
            console.log("erro " + error.code)
            if(error.code == "auth/invalid-email" ){
                setModalMensage("E-mail enviado, por favor verificar a caixa de lixo eletronico");
                setModalWarning(true);
            }
            if(error.code == "auth/missing-email"){
                setModalMensage("Insira um e-mail");
                setModalWarning(true);
            }
            else {
                setModalMensage("E-mail enviado !");
                setModalVisible(true);
            }

          })
    }

    function handleNavigateToIncial() {
        setModalVisible(!modalVisible);
        setCarregando(false);
        navigation.navigate('Inicial');
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
            funcaoOnRequestClose={handleNavigateToIncial}
            mensage={modalMensage} />
            <FeedbackModal
                modalVisible={modalWarning}
                funcaoOnRequestClose={closeModal}
                mensage={modalMensage} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <BackScreen/>
                    <Text style={styles.title}>Recuperar senha</Text>
                    <Text style={styles.instructions}>Insira o email vinculado a sua conta e nós iremos enviar um e-mail com as instruções para a recuperação da senha.</Text>
                    <View style={styles.buttonContent}>
                        <TextField 
                        labelName="Email" 
                        onChangeText={setEmail}
                        tipoTeclado={"email-address"} />
                    </View>
                </View>
                <Button title='Enviar instruções' onPress={handleRecuperarSenha}/>
            </View>
        </ScrollView>
    );
}

export default RecuperarSenha;