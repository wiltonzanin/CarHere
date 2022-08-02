import { StyleSheet, Dimensions } from "react-native";
import { colorsDark } from "react-native-elements/dist/config";
import fonts from "../../Styles/fonts";
import {darkTheme} from '../../Styles/colors';

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
    backgroundColor: colors.grayLight,
    height: 100,
    flexDirection: 'row',
    justifyContent: "space-between",
    borderRadius: 5,
  },
  listagemErro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.text
  },

  content: {
    flexGrow: 1 
  },

  imgVeiculo: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: Dimensions.get('window').width - 40,
    height: 200,
    resizeMode: 'cover',
  },

  cardImg: {
    backgroundColor: darkTheme.grayLight,
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  card: {
    marginTop: 20,
    backgroundColor: darkTheme.textField,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
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

  textStatusOk: {
    color: darkTheme.green,
    fontSize: 14,
    fontFamily: fonts.text
  },

  textStatusWarning: {
    color: darkTheme.yellow,
    fontSize: 14,
    fontFamily: fonts.text
  },

  textStatusError: {
    color: darkTheme.red,
    fontSize: 14,
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

  servicesTitle: {
    fontSize: 18,
    fontFamily: fonts.title
  },

  servicesText: {
    fontSize: 18,
    fontFamily: fonts.text
  },

  cardStyle: {
    backgroundColor: darkTheme.textField,
    padding: 20,
    borderRadius: 10
  },

  drawer: {
    backgroundColor: darkTheme.background,
  },

  drawerText: {
    color: darkTheme.grayLight,
    fontFamily: fonts.text
  },
});

export default styles;
