import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import BackScreen from "../../../../components/backScreen";
import { List } from 'react-native-paper';
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native-svg";
import colors from '../../../../Styles/colors'
import { color } from "react-native-reanimated";


function ManualDoUsuario() {

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.headerTitle}>Manual do usuario</Text>
          <View />
        </View>
        <View>
          {/* Documentação: https://callstack.github.io/react-native-paper/2.0/list-accordion.html */}
          <List.Section>
            <List.Accordion
              title="1. CADASTRAR VEÍCULO"
              titleStyle={styles.accordionTitle}
              style={styles.accordion}
              theme={{ colors: { text: colors.grayLight } }}>
              <View style={styles.textBody}>
                <Text style={styles.text}>                 
                  {"\t"}{"\t"} Para realizar o cadastro de um novo veículo, acesse a tela seguindo os passos abaixo:{"\n"}{"\n"}
                  1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                  2-Toque no botão + Adicionar veículo.{"\n"}
                  3-Preencha o campo Marca com a marca do seu veículo.{"\n"}
                  4-Preencha o campo Modelo com o modelo, ou nome do seu veículo.{"\n"}
                  5-Selecione o tipo de combustível utilizado.{"\n"}
                  6-Preencha o campo Motorização com as cilindradas do motor, por exemplo, 2.0.{"\n"}
                  7-Selecione o Ano de fabricação.{"\n"}
                  8-Insira ou não até 5 imagens do seu veículo. Este campo é opcional!{"\n"}
                  9-Toque no botão Concluir{"\n"}
                  10-Aguarde a mensagem de sucesso.{"\n"}
                </Text>
              </View>
              </List.Accordion>
            <List.Accordion
              title="2. VEÍCULOS CADASTRADOS"
              titleStyle={styles.accordionTitle}
              style={styles.accordion}
              theme={{ colors: { text: colors.grayLight } }}>
                <Text style={styles.text}>
                {"\t"}{"\t"}Caso deseje visualizar o veículos que foram cadastrados no aplicativo, acesse a funcionalidade Veículos cadastrados, seguindos os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no botão Veículos cadastrados.{"\n"}
	              3-Nessa tela será listado todos os veículos que foram cadastrados exibindo o modelo, imagem (caso tenha sido inserido alguma no cadastro) e o status do veículo.{"\n"}
                </Text>
                <Text style={styles.title}>2.1 DETALHES DO VEÍCULO{"\n"}</Text>
                <Text style={styles.text}>
                {"\t"}{"\t"}Para visualizar os detalhes do veículo cadastrado, tais como, informações, serviços e autonomia, siga os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no botão Veículos cadastrados.{"\n"}
                3-Toque no card do veículo que deseja visualizar os detalhesas.{"\n"}
                </Text>
                </List.Accordion>

                <List.Accordion
              title="3. SERVIÇOS"
              titleStyle={styles.accordionTitle}
              style={styles.accordion}
              theme={{ colors: { text: colors.grayLight } }}>
                <Text style={styles.text}>
                {"\t"}{"\t"}Para acessar a funcionalidade serviços siga os seguintes passos: {"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no botão Serviços.{"\n"}
                3-Nessa tela é possível visualizar os serviços cadastrados, para visualizar as informações mais detalhadas, toque em um dos serviços para que abra uma nova tela com os dados detalhados do serviço em questão. {"\n"}
                Caso não haja serviços cadastrados será necessário realizar um cadastro de serviço.{"\n"}
                </Text>
                <Text style={styles.title}>3.1 DETALHES DO SERVIÇO{"\n"}</Text>
                <Text style={styles.text}>
                {"\t"}{"\t"}Para visualizar os detalhes do serviço cadastrado, siga os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no botão Serviços.{"\n"}
                3-Toque no card do serviço que deseja visualizar os detalhes{"\n"}
                </Text>
                </List.Accordion>

                <List.Accordion
                title="4. CADASTRAR SERVIÇO"
                titleStyle={styles.accordionTitle}
               style={styles.accordion}
                theme={{ colors: { text: colors.grayLight } }}>
                  <Text style={styles.text}>
                {"\t"}{"\t"}Para realizar o cadastro de um serviço, acesse a tela seguindo os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no botão Serviços.{"\n"}
                3-Toque no botão + Adicionar serviço.{"\n"}
                4-Preencha o campo Nome com um título descritivo para o serviço realizado.{"\n"}
                5-Preencha ou não o campo Local que foi realizado o serviço com o local ou empresa onde o serviço foi realizado.{"\n"}
                6-Selecione ou não o valor do campo Data do serviço com a data em que o serviço foi realizado.{"\n"}
                7-Selecione ou não o Tempo de serviço para indicar quanto tempo durou a execução do serviço.{"\n"}
                8-Preencha ou não o campo Valor do serviço com o valor final do serviço.{"\n"}
                9-Preencha o campo Descrição do serviço realizado para descrever o que foi feito na realização do serviço.{"\n"}
                10-Toque no botão Concluir.{"\n"}
                11-Aguarde a mensagem de sucesso.{"\n"}
              </Text> 
              </List.Accordion>
              <List.Accordion
                title="5. CONFIGURAÇÕES"
                titleStyle={styles.accordionTitle}
               style={styles.accordion}
                theme={{ colors: { text: colors.grayLight } }}>
                  <Text style={styles.text}>
                {"\t"}{"\t"}Para acessar as preferências do aplicativo, opções de usuário e os termos do serviço, acesso o menu Configurações seguindo os passo abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no botão Configurações.{"\n"}{"\n"}{"\n"}

                <Text style={styles.title}>5.1 UNIDADES DE MEDIDA{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}É possível alterar as unidades de medida do aplicativo através da configuração Unidades de medidas, para alterar as unidades, siga os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Unidades de medida.{"\n"}
                4-Selecione o Tipo de métrica.{"\n"}
                5-Selecione a Unidade de medida de volume.{"\n"}
                6-Toque no ícone de Salvar, Disquete.{"\n"}{"\n"}

                <Text style={styles.title}>5.2 ACESSIBILIDADE{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}Para habilitar opções de acessibilidade disponíveis no aplicativo, basta seguir os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Acessibilidade.{"\n"}
                4-Habilite as configurações de Acessibilidade desejadas.{"\n"}
                5-Toque no ícone de Salvar, Disquete.{"\n"}{"\n"}

                <Text style={styles.title}>5.3 APARÊNCIA{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}Caso deseje alterar o tema do do aplicativo, é possível alterar através da configuração de aparência, que pode ser alterada através dos passos:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Aparência.{"\n"}
                4-Selecione uma opção no campo Tema.{"\n"}
                5-Toque no ícone de Salvar, Disquete.{"\n"}{"\n"}
               
                <Text style={styles.title}>5.4 OPÇÕES DE USUÁRIO{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}No menu de opções de usuário é possível realizar algumas alterações relacionadas ao perfil do usuário, tais como, alterar a senha, alterar foto, opções de segurança e sair da aplicação. Para acessar as opções de usuário, siga os passos:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Opções de usuário.{"\n"}{"\n"}

                <Text style={styles.title}>5.4.1 ALTERAR SENHA{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}Caso precise alterar a senha do usuário em questão, siga os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Opções de usuário.{"\n"}
                4-Toque no botão Alterar senha.{"\n"}
                5-Preencha o campo Email com um e-mail válido.{"\n"}
                6-Toque no botão Enviar instruções.{"\n"}{"\n"}               

                <Text style={styles.title}>5.4.2 Segurança{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}É possível habilitar uma autenticação de dois fatores através das opções de Segurança, para habilitar esta opção siga os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Opções de usuário.{"\n"}
                4-Toque no botão Segurança.{"\n"}
                5-Toque no botão referente a opção de segurança desejada.{"\n"}{"\n"}

                <Text style={styles.title}>5.4.2.1 Mfa{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}Caso deseje habilitar a autenticação de dois fatores do aplicativo, siga os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Opções de usuário.{"\n"}
                4-Toque no botão Segurança.{"\n"}
                5-Toque no botão MFA.{"\n"}
                6-Selecione a Pergunta de segurança.{"\n"}
                7-Preencha o campo de Resposta, com a resposta referente a pergunta selecionada anteriormente.{"\n"}
                8-Toque no botão Concluir.{"\n"}{"\n"}
                
                <Text style={styles.title}>5.4.3 Termos de serviço{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}Para visualizar os termos de serviço do aplicativo basta seguir os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Ter mos de serviço.{"\n"}
                4-Toque no botão Termos de serviço para exibir o conteúdo dos termos.{"\n"}
                5-Toque no botão Política de dados para exibir o conteúdo da política de dados do aplicativo.{"\n"}{"\n"}
                
                <Text style={styles.title}>5.4.4 Sair{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}Caso deseje sair da aplicação:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Clicar no botão Sair.{"\n"}{"\n"}
                </Text> 
              </List.Accordion>
              <List.Accordion
                title="6. AJUDA E FEEDBACK"
                titleStyle={styles.accordionTitle}
                style={styles.accordion}
                theme={{ colors: { text: colors.grayLight } }}>
                <Text style={styles.text}>
                {"\t"}{"\t"}Caso precise de ajuda para solucionar um problema, ou queira enviar um feedback para a nossa equipe, acesse a tela, Ajuda e feedback seguindo os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone   para abrir o menu lateral.{"\n"}
                2-Toque no botão Ajuda e Feedback.{"\n"}{"\n"}
                <Text style={styles.title}>6.1 ENTRE EM CONTATO{"\n"}</Text>
                <Text style={styles.text}></Text>             
                {"\t"}{"\t"}Para entrar em contato com a nossa equipe, toque no botão Entre em contato a partir da tela de ajuda e feedback, conforme descrito acima. Após acessar a tela de entre em contato, haverá duas opções, sendo elas:{"\n"}{"\n"}
                1-Enviar um email{"\n"}
                2-Enviar uma solicitação pelo App{"\n"}
                <Feather
              name="align-justify"
              size={15}
              color={colors.grayLight}
                />
                </Text>                                                                                              
                </List.Accordion> 
              </List.Section>  
        </View>
      </View>
    </ScrollView>
  );
}

export default ManualDoUsuario;
