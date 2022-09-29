import { StyleSheet, Dimensions } from "react-native";
import { colorsDark } from "react-native-elements/dist/config";
import fonts from "../../Styles/fonts";
import {darkTheme} from '../../Styles/colors';
import { black } from "react-native-paper/lib/typescript/styles/colors";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
    padding: 20,
  },

  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginBottom: 20
    
},

veiculos: {
  marginTop: 20,
},

buttonVeiculo: {
  backgroundColor: '#f00000',
  height: 100,
  width: Dimensions.get('window').width - 40,
  borderRadius: 5,
},

buttonGroupText: {
  flex: 1,
  padding: 10,
  justifyContent: 'space-between',
  fontFamily: fonts.text
},

buttonVeiculoText: {
  color: '#FFFFFF',
  fontSize: 24,
  fontFamily: fonts.title,
  textAlign: 'center',
},

buttonVeiculoTextManutencaoGreen1: {
  color: '#252525',
  fontSize: 16,
  fontFamily: fonts.text
},

  title: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  buttonsHeader: {
    height: 30,
    width: 30,
  },
  buttonAdicionar: {
    backgroundColor: darkTheme.grayLight,
    height: 100,
    flexDirection: 'row',
    justifyContent: "space-between",
    borderRadius: 5,
  },
  buttonAdicionarServico: {
  backgroundColor: darkTheme.button,
  height: 60,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
  marginTop:20
  },
  listagemErro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },


  servicesText: {
    fontSize: 18,
    fontFamily: fonts.text
  },

  cardServices: {
    backgroundColor: darkTheme.grayLight,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },

  servicesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20
  },

  content: {
    flexGrow: 1 
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cardTitle: {
    fontFamily: fonts.title,
    color: darkTheme.grayLight,
    fontSize: 20,
    marginBottom: 20,
  },
  card: {  
    marginTop:20,
    backgroundColor: darkTheme.textField,
    padding: 20,
    borderRadius: 10,
    marginBottom: 180,
  },
  cardImg: { 
    backgroundColor: darkTheme.textField,
    padding: 20,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    marginTop: 1,
  },

  imgVeiculo: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: Dimensions.get('window').width - 40,
    height: 200,
    backgroundColor: darkTheme.textField,
    resizeMode: 'cover',
  },

  noimg: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: Dimensions.get('window').width - 40,
    height: 200,
    backgroundColor: darkTheme.textField,
    alignSelf: 'center',
    justifyContent: 'center'
  },

  icon:{
    alignSelf: 'center',
  },

  buttonServicoText: {
    color: darkTheme.background,
    fontSize: 15,
    fontWeight: 'bold',
  },
  servicos: {
    marginTop: 20,
  },

  noInfoText: {
    backgroundColor: darkTheme.grayLight,
    fontSize: 16,
    textAlign: 'center',
  },

  buttonGroupTextServico: {
    flex: 1,
    padding: 8,
    justifyContent: "space-between",
  },

  buttonServico: {
    backgroundColor: darkTheme.grayLight,
    height: 100,
    marginTop:10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  
  drawer: {
    backgroundColor: darkTheme.background,
  },
  textInfo2: {
    color: darkTheme.background,
    fontSize: 14,
  },
  drawerText: {
    color: darkTheme.grayLight,
    fontFamily: fonts.text
  },
});

export default styles;
