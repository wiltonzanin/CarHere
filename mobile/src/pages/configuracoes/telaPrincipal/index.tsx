import * as React from 'react';
import { View, Text } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function Configuracoes({ navigation }:any) {

  const { navigate } = useNavigation();

  function handleNavigateToAlterarSenhaPage() {
    navigate('AlterarSenha');
  }

  function handleNavigateToSobre() {
    navigate('Sobre');
  }

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.button} >
          <Feather name="align-justify" size={25} color='#F0EFF4' />
        </RectButton>
      </View>
      <View style={styles.content}>
        <RectButton onPress={handleNavigateToAlterarSenhaPage} style={styles.buttonContent}>
          <Text style={styles.buttonText}>Alterar Senha</Text>
        </RectButton>
        <RectButton style={styles.buttonContent}>
          <Text style={styles.buttonText}>Ajuda</Text>
        </RectButton>
        <RectButton onPress={handleNavigateToSobre} style={styles.buttonContent}>
          <Text style={styles.buttonText}>Sobre</Text>
        </RectButton>
      </View>
      <View style={styles.buttonsSection}>
      <Text style={styles.buttonText}>Ignorar botões</Text>
        <View style={styles.inputGroup}>
          <View>
            <RectButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.buttonCancelar}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </RectButton>
          </View>
          <View>
            <RectButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.buttonSalvar}>
              <Text style={styles.buttonText}>Salvar</Text>
            </RectButton>
          </View>
        </View>
      </View>
    </View>

  );
}

export default Configuracoes;