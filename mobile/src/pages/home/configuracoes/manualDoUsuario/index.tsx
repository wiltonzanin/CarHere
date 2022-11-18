import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import BackScreen from "../../../../components/backScreen";
import { List } from 'react-native-paper';
import { Feather } from "@expo/vector-icons";
import {darkTheme} from '../../../../Styles/colors'

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
              theme={{ colors: { text: darkTheme.grayLight } }}>
              <View style={styles.textBody}>
                <Text style={styles.text}>                 
                  {"\t"}{"\t"} Para realizar o cadastro de um novo veículo, acesse a tela seguindo os passos abaixo:{"\n"}{"\n"}
                  1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                  2-Toque no botão + Cadastrar veículo.{"\n"}
                  3-Preencha o campo Marca ou selecione(Seleção disponivel somente com internet).{"\n"}
                  4-Preencha o campo Modelo ou selecione (Seleção disponivel somente se a Marca for previamente selecionada).{"\n"}
                  5-Selecione o tipo de combustível utilizado.{"\n"}
                  6-Preencha o campo Motorização com as cilindradas do motor, por exemplo, 2.0.{"\n"}
                  7-Selecione o Ano de fabricação.{"\n"}
                  8-Insira até 5 imagens do seu veículo. (Este campo é opcional!){"\n"}
                  9-Toque no botão Concluir{"\n"}
                  10-Aguarde a mensagem de sucesso.{"\n"}
                </Text>
              </View>
              </List.Accordion>

              
            <List.Accordion
              title="2. VEÍCULOS CADASTRADOS"
              titleStyle={styles.accordionTitle}
              style={styles.accordion}
              theme={{ colors: { text: darkTheme.grayLight } }}>
                <Text style={styles.text}>
                {"\t"}{"\t"}Caso deseje visualizar os veículos cadastrados no aplicativo, siga os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no botão Veículos cadastrados.{"\n"}
	              3-Nessa tela será listado todos os veículos cadastrados exibindo o modelo, imagem (caso tenha sido inserido no cadastro), marca e ano.{"\n"}
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
              theme={{ colors: { text: darkTheme.grayLight } }}>
                <Text style={styles.text}>
                {"\t"}{"\t"}Para acessar a funcionalidade serviços, siga os seguintes passos: {"\n"}{"\n"}
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
                theme={{ colors: { text: darkTheme.grayLight } }}>
                  <Text style={styles.text}>
                {"\t"}{"\t"}Para realizar o cadastro de um serviço, acesse a tela de cadastro seguindo os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no botão Serviços.{"\n"}
                3-Toque no botão + Adicionar serviço.{"\n"}
                4-Preencha obrigatóriamente o campo Nome com um título descritivo para o serviço realizado.{"\n"}
                5-Preencha ou não o campo Local que foi realizado o serviço com o local ou empresa onde o serviço foi realizado.{"\n"}
                6-Selecione ou não o valor do campo Data do serviço com a data em que o serviço foi realizado.{"\n"}
                7-Preencha ou não a Quilometragem atual do veiculo.{"\n"}
                8-Preencha ou não o campo Valor do serviço com o valor final do serviço.{"\n"}
                9-Preencha ou não o campo Descrição do serviço realizado para descrever o que foi feito na realização do serviço.{"\n"}
                10-Preencha obrigatóriamente o campo Veículo.{"\n"}
                11-Assinale a caixa de seleção se o Serviço foi realizado ou não{"\n"}
                11-Toque no botão Concluir.{"\n"}
                12-Aguarde a mensagem de sucesso.{"\n"}
              </Text> 
              </List.Accordion>


              <List.Accordion
                title="5. CONFIGURAÇÕES"
                titleStyle={styles.accordionTitle}
               style={styles.accordion}
                theme={{ colors: { text: darkTheme.grayLight } }}>
                  <Text style={styles.text}>
                {"\t"}{"\t"}Para acessar as opções de usuário os termos do serviço e o botão para salvar as informações na Nuvem, acesso o menu Configurações seguindo os passo abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no botão Configurações.{"\n"}{"\n"}{"\n"}

                <Text style={styles.title}>5.1 OPÇÕES DE USUÁRIO{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}No menu de opções de usuário é possível realizar algumas alterações relacionadas ao perfil do usuário, tais como, alterar a senha, alterar foto, opções de segurança e sair da aplicação. Para acessar as opções de usuário, siga os passos:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Opções de usuário.{"\n"}{"\n"}

                <Text style={styles.title}>5.1.1 ALTERAR SENHA{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}Caso precise alterar a senha do usuário em questão, siga os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Opções de usuário.{"\n"}
                4-Toque no botão Alterar senha.{"\n"}
                5-Abra o seu Email e Clique no link para redefinir a senha (Esse link tem uma validade de 5 min){"\n"}{"\n"}

                <Text style={styles.title}>5.1.2 Alterar foto{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}Caso deseje alterar a foto de perfil:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Clicar no botão Configurações.{"\n"}
                3-Clicar no botão Opções de usuário{"\n"}
                4-Clicar no botão Alterar foto{"\n"}
                5-Aceitar a solicitão do aplicativo para acessar sua galeria caso ainda não tenha aceitado esssa permissão{"\n"}
                6-Escolha uma foto de sua preferencia da sua galeria e confirme{"\n"}{"\n"}    

                <Text style={styles.title}>5.1.3 Sair{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}Caso deseje sair da aplicação:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Clicar no botão Configurações.{"\n"}
                3-Clicar no botão Opções de usuário{"\n"}
                4-Clicar no botão Sair.{"\n"}{"\n"}              
                
                <Text style={styles.title}>5.2 Termos de serviço{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}Para visualizar os termos de serviço do aplicativo basta seguir os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Termos de serviço.{"\n"}
                4-Toque no botão Termos de consentimento para exibir o conteúdo dos termos.{"\n"}
                5-Toque no botão Política de Privacidade para exibir o conteúdo da política de dados do aplicativo.{"\n"}{"\n"}

                <Text style={styles.title}>5.3 Banco de Dados{"\n"}</Text>
                <Text style={styles.text}></Text>
              	{"\t"}{"\t"}Para salvar as informações cadastradas no banco de dados na Nuvem, siga os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/> para abrir o menu lateral.{"\n"}
                2-Toque no menu Configurações.{"\n"}
                3-Toque no botão Salvar o Banco de dadaos na numvem.{"\n"}{"\n"}
                </Text> 
              </List.Accordion>


              <List.Accordion
                title="6. AJUDA E FEEDBACK"
                titleStyle={styles.accordionTitle}
                style={styles.accordion}
                theme={{ colors: { text: darkTheme.grayLight } }}>
                <Text style={styles.text}>
                {"\t"}{"\t"}Caso precise de ajuda para solucionar um problema, ou queira enviar um feedback para a nossa equipe, acesse a tela Ajuda e feedback, seguindo os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/>  para abrir o menu lateral.{"\n"}
                2-Toque no botão Ajuda e Feedback.{"\n"}{"\n"}
                
                <Text style={styles.title}>6.1 ENTRE EM CONTATO{"\n"}</Text>
                <Text style={styles.text}></Text>             
                {"\t"}{"\t"}Para entrar em contato com a nossa equipe, toque no botão Entre em contato a partir da tela de ajuda e feedback, conforme descrito acima. Após acessar essa tela segue os passos a baixo:{"\n"}{"\n"}
                1-Clique no botão Entre em contato{"\n"}
                2-Clique no botão Enviar uma Email{"\n"}
                3-Selecione um aplicativo para enviar o Email{"\n"}
                <Feather
              name="align-justify"
              size={15}
              color={darkTheme.grayLight}
                />
                </Text>                                                                                              
                </List.Accordion>


                <List.Accordion
                title="7. Autonomia"
                titleStyle={styles.accordionTitle}
                style={styles.accordion}
                theme={{ colors: { text: darkTheme.grayLight } }}>
                <Text style={styles.text}>
                {"\t"}{"\t"}Caso queira cadastrar uma autonomia para o seu veículo, siga os passos abaixo:{"\n"}{"\n"}
                1-Arraste a tela da esquerda para direita ou toque no ícone <Feather name="align-justify" size={15} color={"#F0EFF4"}/>  para abrir o menu lateral.{"\n"}
                2-Toque no botão Autonomia.{"\n"}
                3-Selecione um veículo já cadastrado{"\n"}
                4-Preencha o campo Km inicial{"\n"}
                5-Preencha o campo Km final{"\n"}
                6-Preencha o campo Litros abastecidos{"\n"}
                7-Preencha o campo Percurso{"\n"}
                8-Selecionar um Combustível{"\n"}
                9-Clicar no botão Salvar{"\n"}
                (Totodos os campos são Obrigatórios){"\n"}{"\n"}
                
                <Text style={styles.title}>7.1 Autonomias cadastradas{"\n"}</Text>
                <Text style={styles.text}></Text>             
                {"\t"}{"\t"}Para verificar uma autonomia ja cadastrada, siga os passos a baixo:{"\n"}{"\n"}
                1-Clique no botão Veículos cadastrados{"\n"}
                2-Selecione um veículos{"\n"}
                3-Clique no botão autonomia{"\n"}
                4-Selecione uma das autonomias cadastradas{"\n"}
                5-Escolha entre editar (Botão canto superior direito) ou Deletar {"\n"}{"\n"}
                </Text>                                                                                              
                </List.Accordion> 
              </List.Section>  
        </View>
      </View>
    </ScrollView>
  );
}

export default ManualDoUsuario;
