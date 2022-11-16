import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import BackScreen from "../../../../components/backScreen";
import { List } from "react-native-paper";

function Termos() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackScreen />
          <Text style={styles.headerTitle}>Termos</Text>
          <View />
        </View>
        <View>
          {/* Documentação: https://callstack.github.io/react-native-paper/2.0/list-accordion.html */}
          <List.Section>
            <List.Accordion
              title="Termo de consentimento"
              titleStyle={styles.accordionTitle}
              style={styles.accordion}
              theme={{ colors: { text: "#FFF" } }}
            >
              <View style={styles.textBody}>
                <Text style={styles.title}>
                  Termo de consentimento para armazenamento e tratamento de
                  dados pessoais em conformidade com a LGPD.
                  {"\n"}
                </Text>
                <Text style={styles.text}>
                  {"\t"}
                  {"\t"} Este documento visa registrar a manifestação livre,
                  informada e inequívoca pela qual o titular concorda com o
                  tratamento de seus dados pessoais para finalidade específica,
                  em conformidade com a Lei nº 13.709 – Lei Geral de Proteção de
                  Dados Pessoais (LGPD). Informamos que coletamos seus dados
                  pessoais (Nome completo, senha, Email) para oferecer serviços
                  personalizados (incluindo conteúdos e anúncios), para que
                  nós possamos entrar em contato com você.
                  Os seus dados pessoais serão armazenados e preservados
                  por um período indeterminado; os dados dos clientes são
                  registrados no sistema e podem ser anonimizados a qualquer
                  momento, desde que o cliente solicite. Ao criar uma conta no
                  aplicativo, você declara que todas as informações fornecidas
                  são verdadeiras e assume a responsabilidade de mantê-las
                  atualizadas. Para proteção de sua conta, sua senha deve ser
                  mantida em sigilo e não deve ser compartilhada, pois as
                  atividades realizadas no aplicativo com o uso de sua conta
                  serão sempre de sua responsabilidade. É expressamente proibido
                  a transferência, cessão, aluguel ou venda da conta. Você
                  poderá, a qualquer momento: Ter acesso às informações sobre a
                  forma e a duração de tratamento dos seus dados na nossa
                  plataforma; Solicitar a atualização ou correção dos seus
                  dados; Solicitar a eliminação dos seus dados pessoais tratados
                  e revogação do consentimento, nos termos da Lei. As
                  solicitações e questionamentos acerca do tratamento e
                  eliminação de seus dados deverão ser realizadas através do
                  email CarHere.Suporte@gmail.com.{"\n"}
                </Text>
                
                <Text style={styles.title}>
                  Segurança das informações{"\n"}
                </Text>
                <Text style={styles.text}>
                  {" "}
                  {"\t"} {"\t"}O CarHere trata a segurança das informações
                  como prioridade máxima. Nossos Serviços integram recursos de
                  segurança avançados que protegem seus dados de forma contínua.
                  O CarHere implementa sistemas, aplicativos e
                  procedimentos para preservar suas informações pessoais e
                  minimizar o risco de roubo, dano, perda ou acesso e uso não
                  autorizado delas. Por exemplo, analisamos nossas práticas de
                  coleta, armazenamento e processamento de dados, incluindo
                  medidas de segurança física, para impedir o acesso não
                  autorizado aos nossos sistemas. Além disso, restringimos o
                  acesso às informações pessoais aos funcionários, contratados e
                  agentes do  CarHere que precisam processá-las. Todas as
                  pessoas com esse acesso estão sujeitas a rigorosas obrigações
                  contratuais de confidencialidade, podendo ser processadas ou
                  dispensadas se deixarem de cumpri-las. Os insights que
                  recebemos na manutenção dos nossos Serviços nos ajudam a
                  detectar e bloquear automaticamente ameaças de segurança para
                  que elas não cheguem até você. No entanto, mesmo com essas
                  medidas, não é possível fornecer garantia absoluta. Portanto,
                  embora o CarHere envide todos os esforços razoáveis para
                  proteger suas informações pessoais, não podemos garantir e
                  você não pode esperar que nossos bancos de dados estejam
                  imunes a irregularidades, falhas, interceptações ou acessos
                  ilegais ou outros tipos de abuso e uso indevido. Você pode
                  decidir se quer ou não enviar informações para os Serviços.
                  Contudo, o conteúdo que você optar por compartilhar e publicar
                  não será considerado privado nem confidencial. Assim, tenha em
                  mente que outras pessoas poderão ter acesso a ele. Não
                  compartilharemos suas informações pessoais com outras pessoas,
                  sem sua permissão.
                  {"\n"}
                </Text>

                <Text style={styles.title}>
                  Integração com outros serviços de terceiros{"\n"}
                </Text>
                <Text style={styles.text}>
                  {" "}
                  {"\t"} {"\t"}O CarHere oferece a opção de vincular nossos
                  Serviços aos serviços de terceiros que podem ser úteis para
                  você. O CarHere solicitará a confirmação
                  para conectar as contas quando ele detecta que uma integração
                  está disponível. Isso pode acontecer quando um serviço de
                  terceiros tenta se conectar ao CarHere, quando ele
                  detecta um serviço instalado no dispositivo que pode ser
                  integrado ou quando você solicita uma integração específica.
                  Se você aprovar a conexão, o CarHere solicitará sua
                  permissão para compartilhar dados com o serviço de terceiros.
                  Somente conecte as contas se confiar no serviço de terceiros
                  que receberá os dados definidos no momento da conexão das
                  contas, porque não somos responsáveis pelo uso de dados feito
                  por serviços de terceiros. Você pode desconectar ambos os
                  serviços a qualquer momento, e o CarHere deixará de
                  compartilhar dados com o terceiro a partir da desconexão.
                </Text>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Política de Privacidade"
              titleStyle={styles.accordionTitle}
              style={styles.accordion}
              theme={{ colors: { text: "#FFF" } }}
            >
              <View style={styles.textBody}>
                <Text style={styles.title}>
                  Quais Tipos de Informações Coletamos?{"\n"}
                </Text>
                <Text style={styles.text}>
                  {"\t"} {"\t"}
                  Na CarHere LTDA, privacidade e segurança são prioridades
                  e nos comprometemos com a transparência do tratamento de dados
                  pessoais dos nossos usuários/clientes. Por isso, essa presente
                  Política de Privacidade estabelece como é feita a coleta, uso
                  e transferência de informações de clientes ou outras pessoas
                  que acessam ou usam nosso site. Ao utilizar nossos serviços,
                  você entende que coletamos e usamos suas informações pessoais
                  nas formas descritas nesta Política, sob as normas de Proteção
                  de Dados (LGPD, Lei Federal 13.709/2018), das disposições
                  consumeristas da Lei Federal 8078/1990 e as demais normas do
                  ordenamento jurídico brasileiro aplicáveis. Dessa forma, a 
                  CarHere LTDA, doravante denominada simplesmente como “CarHere”, 
                  no papel de Controladora de Dados, obriga-se ao disposto na 
                  presente Política de Privacidade.
                </Text>
                <Text style={styles.title}>
                  1. Quais dados coletamos sobre você e para qual finalidade?
                </Text>
                <Text style={styles.text}>
                  Nosso site coleta e utiliza alguns dados pessoais seus, de
                  forma a viabilizar a prestação de serviços e aprimorar a
                  experiência de uso.
                </Text>

                <Text style={styles.title}>
                  1.1. Dados pessoais fornecidos pelo titular
                </Text>
                <Text style={styles.text}>
                  O nome completo é utilizado como forma de identificação do
                  usuário e para validar as informações pessoais do usuário para
                  a segurança de quem anuncia e realiza negociações dentro do
                  aplicativo. A senha será utilizada para validar e proteger o
                  acesso do usuário ao aplicativo. O email será utilizado para
                  validar e proteger o acesso do usuário ao aplicativo e também
                  para entrar em contato com o usuário e em caso de alteração de
                  senha.
                </Text>

                <Text style={styles.title}>
                  1.2. Dados pessoais coletados automaticamente
                </Text>
                <Text style={styles.text}>
                  Informações da conta: Quando você cria a conta no CarHere
                  nós coletamos algumas informações como nome, endereço de
                  email e fotos dentro da nossa plataforma. Atendimento ao
                  cliente: caso seja necessário você entrar em contato conosco,
                  o CarHere pode coletar as informações pessoais
                  necessárias para que seja feito o atendimento, assim como
                  informações sobre suas comunicações com o CarHere.
                  Informações coletadas automaticamente: Ao acessar os sites e
                  serviços de terceiros, o CarHere pode receber e registrar
                  informações de seu navegador ou dispositivo em nossos
                  servidores , como por exemplo Identificador de Publicidade do
                  Android, do IOS ou de outros sistemas operacionais análogos,
                  assim como dados de localização recebidos através do dos
                  sensores do dispositivo. também podemos coletar dados sobre
                  publicidade no dispositivo, incluindo cliques efetuados a
                  partir dele, impressões e tempo de permanência em publicidade.
                  Dados do seu dispositivo que podem ser coletados se você
                  utiliza nosso aplicativo: I - Identificadores anônimos de
                  publicidade no dispositivo, atributos do dispositivo móvel e
                  aplicativos instalados no aparelho; II - Dados dos sensores do
                  aparelho; III - Dados anonimizados da localização do aparelho
                  por meio do GPS ou rede de celular. O CarHere pode
                  permitir que terceiros, como prestadores de serviço de
                  publicidade e estatística, coletem quaisquer informações
                  especificadas neste item, utilizando esse tipo de tecnologia
                  diretamente no aplicativo. Os dados e informações coletadas
                  serão utilizadas para: Criar e gerenciar sua conta no nosso
                  aplicativo, verificar sua identidade, resolver dificuldades
                  técnicas e habilitar ou desabilitar recursos; Customizar
                  anúncios e experiências no aplicativo, dentro do que a
                  legislação permite; Entrar em contato com o usuário, incluindo
                  sobre assuntos relacionados ao serviço, atendimento ao cliente
                  ou comunicações de marketing; Realizar operações internas,
                  incluindo suporte ao cliente, solução de problemas, análise de
                  dados, testes, pesquisas e estatística, a fim de melhorar
                  nossos serviços; Conforme exigido pelas leis e regulamentos
                  aplicáveis; Para outras finalidades, as quais fornecemos um
                  aviso específico no momento da coleta, ou, de outro modo,
                  conforme autorizado ou exigido pela lei.
                </Text>

                <Text style={styles.title}>
                  2. Como coletamos os seus dados?
                </Text>
                <Text style={styles.text}>
                  Nesse sentido, a coleta dos seus dados pessoais ocorre da
                  seguinte forma: Por meio de um cadastro na tela inicial do
                  aplicativo, será requisitado a forma com a qual você deseja
                  fornecer seus dados. Com a permissão dos dados o CarHere 
                  coletará seus dados por meio desses aplicativos de terceiros. 
                  Ou você poderá fazer o seu cadastro de forma manual na Tela de
                  Cadastro que o CarHere disponibilizará quando aberto pela
                  primeira vez o aplicativo, ou quando desejar criar uma nova conta.
                </Text>

                <Text style={styles.title}>2.1. Consentimento</Text>
                <Text style={styles.text}>
                  É a partir do seu consentimento que tratamos os seus dados
                  pessoais. O consentimento é a manifestação livre, informada e
                  inequívoca pela qual você autoriza a CarHere a tratar
                  seus dados. Assim, em consonância com a Lei Geral de Proteção
                  de Dados, seus dados só serão coletados, tratados e
                  armazenados mediante prévio e expresso consentimento. O seu
                  consentimento será obtido de forma específica para cada
                  finalidade acima descrita, evidenciando o compromisso de
                  transparência e boa-fé da CarHere para com seus
                  usuários/clientes, seguindo as regulações legislativas
                  pertinentes. Ao utilizar os serviços da CarHere e
                  fornecer seus dados pessoais, você está ciente e consentindo
                  com as disposições desta Política de Privacidade, além de
                  conhecer seus direitos e como exercê-los. A qualquer tempo e
                  sem nenhum custo, você poderá revogar seu consentimento. É
                  importante destacar que a revogação do consentimento para o
                  tratamento dos dados pode implicar a impossibilidade da
                  performance adequada de alguma funcionalidade do site que
                  dependa da operação. Tais consequências serão informadas
                  previamente.
                </Text>

                <Text style={styles.title}>3. Quais são os seus direitos?</Text>
                <Text style={styles.text}>
                  A CarHere assegura a seus usuários/clientes seus direitos
                  de titular previstos no artigo 18 da Lei Geral de Proteção de
                  Dados. Dessa forma, você pode, de maneira gratuita e a
                  qualquer tempo: Confirmar a existência de tratamento de dados,
                  de maneira simplificada ou em formato claro e completo.
                  Acessar seus dados, podendo solicitá-los em uma cópia legível
                  sob forma impressa ou por meio eletrônico, seguro e idôneo.
                  Corrigir seus dados, ao solicitar a edição, correção ou
                  atualização destes. Limitar seus dados quando desnecessários,
                  excessivos ou tratados em desconformidade com a legislação
                  através da anonimização, bloqueio ou eliminação. Solicitar a
                  portabilidade de seus dados, através de um relatório de dados
                  cadastrais que a (nome empresarial simplificado) trata a seu
                  respeito. Eliminar seus dados tratados a partir de seu
                  consentimento, exceto nos casos previstos em lei. Revogar seu
                  consentimento, desautorizando o tratamento de seus dados.
                  Informar-se sobre a possibilidade de não fornecer seu
                  consentimento e sobre as consequências da negativa.
                </Text>

                <Text style={styles.title}>
                  4. Como você pode exercer seus direitos de titular?
                </Text>
                <Text style={styles.text}>
                  Para exercer seus direitos de titular, você deve entrar em
                  contato com a CarHere através dos seguintes meios
                  disponíveis: CarHere.Suporte@gmail.com De forma a garantir
                  a sua correta identificação como titular dos dados pessoais
                  objeto da solicitação, é possível que solicitemos documentos
                  ou demais comprovações que possam comprovar sua identidade.
                  Nessa hipótese, você será informado previamente.
                </Text>

                <Text style={styles.title}>
                  5. Como e por quanto tempo seus dados serão armazenados?
                </Text>
                <Text style={styles.text}>
                  Seus dados pessoais coletados pela CarHere serão
                  utilizados e armazenados durante o tempo necessário para a
                  prestação do serviço ou para que as finalidades elencadas na
                  presente Política de Privacidade sejam atingidas, considerando
                  os direitos dos titulares dos dados e dos controladores. De
                  modo geral, seus dados serão mantidos enquanto a relação
                  contratual entre você e a CarHere perdurar. Findado o
                  período de armazenamento dos dados pessoais, estes serão
                  excluídos de nossas bases de dados ou anonimizados,
                  ressalvadas as hipóteses legalmente previstas no artigo 16 lei
                  geral de proteção de dados, a saber: I – cumprimento de
                  obrigação legal ou regulatória pelo controlador; II – estudo
                  por órgão de pesquisa, garantida, sempre que possível, a
                  anonimização dos dados pessoais; III – transferência a
                  terceiro, desde que respeitados os requisitos de tratamento de
                  dados dispostos nesta Lei; ou IV – uso exclusivo do
                  controlador, vedado seu acesso por terceiro, e desde que
                  anonimizados os dados. Isto é, informações pessoais sobre você
                  que sejam imprescindíveis para o cumprimento de determinações
                  legais, judiciais e administrativas e/ou para o exercício do
                  direito de defesa em processos judiciais e administrativos
                  serão mantidas, a despeito da exclusão dos demais dados. O
                  armazenamento de dados coletados pela CarHere reflete o
                  nosso compromisso com a segurança e privacidade dos seus
                  dados. Empregamos medidas e soluções técnicas de proteção
                  aptas a garantir a confidencialidade, integridade e
                  inviolabilidade dos seus dados. Além disso, também contamos
                  com medidas de segurança apropriadas aos riscos e com controle
                  de acesso às informações armazenadas.
                </Text>

                <Text style={styles.title}>
                  6. O que fazemos para manter seus dados seguros?
                </Text>
                <Text style={styles.text}>
                  Para mantermos suas informações pessoais seguras, usamos
                  ferramentas físicas, eletrônicas e gerenciais orientadas para
                  a proteção da sua privacidade. Aplicamos essas ferramentas
                  levando em consideração a natureza dos dados pessoais
                  coletados, o contexto e a finalidade do tratamento e os riscos
                  que eventuais violações geram para os direitos e liberdades do
                  titular dos dados coletados e tratados. Entre as medidas que
                  adotamos, destacamos as seguintes: Apenas pessoas autorizadas
                  têm acesso a seus dados pessoais O acesso a seus dados
                  pessoais é feito somente após o compromisso de
                  confidencialidade Seus dados pessoais são armazenados em
                  ambiente seguro e idôneo. A CarHere se compromete a
                  adotar as melhores posturas para evitar incidentes de
                  segurança. Contudo, é necessário destacar que nenhuma página
                  virtual é inteiramente segura e livre de riscos. É possível
                  que, apesar de todos os nossos protocolos de segurança,
                  problemas de culpa exclusivamente de terceiros ocorram, como
                  ataques cibernéticos de hackers, ou também em decorrência da
                  negligência ou imprudência do próprio usuário/cliente. Em caso
                  de incidentes de segurança que possam gerar risco ou dano
                  relevante para você ou qualquer um de nossos
                  usuários/clientes, comunicaremos aos afetados e a Autoridade
                  Nacional de Proteção de Dados sobre o ocorrido, em consonância
                  com as disposições da Lei Geral de Proteção de Dados.
                </Text>

                <Text style={styles.title}>
                  7. Com quem seus dados podem ser compartilhados?
                </Text>
                <Text style={styles.text}>
                  Tendo em vista a preservação de sua privacidade, o CarHere  
                  não compartilhará seus dados pessoais com nenhum
                  terceiro não autorizado. Estes recebem seus dados apenas na
                  medida do necessário para a prestação dos serviços contratados
                  e nossos contratos são orientados pelas normas de proteção de
                  dados do ordenamento jurídico brasileiro. Todavia, nossos
                  parceiros têm suas próprias Políticas de Privacidade, que
                  podem divergir desta. Além disso, também existem
                  outras hipóteses em que seus dados poderão ser compartilhados,
                  que são: I – Determinação legal, requerimento, requisição ou
                  ordem judicial, com autoridades judiciais, administrativas ou
                  governamentais competentes. II – Caso de movimentações
                  societárias, como fusão, aquisição e incorporação, de forma
                  automática III – Proteção dos direitos do CarHere em
                  qualquer tipo de conflito, inclusive os de teor judicial.
                </Text>

                <Text style={styles.title}>
                  7.1. Transferência internacional de dados
                </Text>
                <Text style={styles.text}>
                  Alguns dos terceiros com quem compartilhamos seus dados podem
                  ser localizados ou possuir instalações localizadas em países
                  estrangeiros. Nessas condições, de toda forma, seus dados
                  pessoais estarão sujeitos à Lei Geral de Proteção de Dados e
                  às demais legislações brasileiras de proteção de dados Nesse
                  sentido, a CarHere se compromete a sempre adotar
                  eficientes padrões de segurança cibernética e de proteção de
                  dados, nos melhores esforços de garantir e cumprir as
                  exigências legislativas. Ao concordar com essa Política de
                  Privacidade, você concorda com esse compartilhamento, que se
                  dará conforme as finalidades descritas no presente
                  instrumento.
                </Text>

                <Text style={styles.title}>
                  8. Alteração desta Política de Privacidade
                </Text>
                <Text style={styles.text}>
                  A atual versão da Política de Privacidade foi formulada e
                  atualizada pela última vez em: (10/03/2021). Reservamos o
                  direito de modificar essa Política de Privacidade a qualquer
                  tempo, principalmente em função da adequação a eventuais
                  alterações feitas em nosso site ou em âmbito legislativo.
                  Recomendamos que você a revise com frequência. Eventuais
                  alterações entrarão em vigor a partir de sua publicação em
                  nosso site e sempre lhe notificaremos acerca das mudanças
                  ocorridas. Ao utilizar nossos serviços e fornecer seus dados
                  pessoais após tais modificações, você às consente.
                </Text>

                <Text style={styles.title}>9. Responsabilidade</Text>
                <Text style={styles.text}>
                  O CarHere prevê a responsabilidade dos agentes que atuam
                  nos processos de tratamento de dados, em conformidade com os
                  artigos 42 ao 45 da Lei Geral de Proteção de Dados. Nos
                  comprometemos em manter esta Política de Privacidade
                  atualizada, observando suas disposições e zelando por seu
                  cumprimento. Além disso, também assumimos o compromisso de
                  buscar condições técnicas e organizativas seguras aptas a
                  proteger todo o processo de tratamento de dados. Caso a
                  Autoridade Nacional de Proteção de Dados exija a adoção de
                  providências em relação ao tratamento de dados realizado pelo
                  CarHere, comprometemo-nos a segui-las.
                </Text>

                <Text style={styles.title}>
                  9.1 Isenção de responsabilidade
                </Text>
                <Text style={styles.text}>
                  Conforme mencionado no Tópico 6, embora adotemos elevados
                  padrões de segurança a fim de evitar incidentes, não há
                  nenhuma página virtual inteiramente livre de riscos. Nesse
                  sentido, o CarHere não se responsabiliza por: I –
                  Quaisquer consequências decorrentes da negligência,
                  imprudência ou imperícia dos usuários em relação a seus dados
                  individuais. Garantimos e nos responsabilizamos apenas pela
                  segurança dos processos de tratamento de dados e do
                  cumprimento das finalidades descritas no presente instrumento.
                  Destacamos que a responsabilidade em relação à
                  confidencialidade dos dados de acesso é do usuário. II – Ações
                  maliciosas de terceiros, como ataques de hackers, exceto se
                  comprovada conduta culposa ou deliberada do CarHere.
                  Destacamos que em caso de incidentes de segurança que possam
                  gerar risco ou dano relevante para você ou qualquer um de
                  nossos usuários/clientes, comunicaremos aos afetados e à
                  Autoridade Nacional de Proteção de Dados sobre o ocorrido e
                  cumpriremos as providências necessárias. III – Inveracidade
                  das informações inseridas pelo usuário/cliente nos registros
                  necessários para a utilização dos serviços do CarHere;
                  quaisquer consequências decorrentes de informações falsas ou
                  inseridas de má-fé são de inteiramente responsabilidade do
                  usuário/cliente.
                </Text>

                <Text style={styles.title}>
                  10. Encarregado de Proteção de Dados
                </Text>
                <Text style={styles.text}>
                  O CarHere disponibiliza os seguintes meios para que você
                  possa entrar em contato conosco para exercer seus direitos de
                  titular: (CarHere.Suporte@gmail.com). Caso tenha dúvidas sobre esta Política de
                  Privacidade ou sobre os dados pessoais que tratamos, você pode
                  entrar em contato com o nosso Encarregado de Proteção de Dados
                  Pessoais, através dos seguintes canais: [Lucas Rogerio Morgenstern
                  (047.043.309-40)]. [lucas.morgenstern@hotmail.com]
                </Text>
              </View>
            </List.Accordion>
          </List.Section>
        </View>
      </View>
    </ScrollView>
  );
}

export default Termos;
