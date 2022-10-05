import { StyleSheet } from "react-native";
import { darkTheme } from "../../../Styles/colors";
import fonts from "../../../Styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
    padding: 20,
  },

  header: {
    paddingTop: 20,
    marginBottom: 20
  },

  headerGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  searchInput: {
    marginTop: 20,
    backgroundColor: darkTheme.textField,
    borderColor: darkTheme.grayMedium,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    color: darkTheme.grayLight,
    fontSize: 16,
    fontFamily: fonts.text
  },

  headerText: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  content: {
    flexGrow: 1
  },

  listagemErro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  veiculos: {
    marginTop: 20,
  },

  buttonVeiculo: {
    backgroundColor: darkTheme.grayLight,
    height: 100,
    flexDirection: 'row',
    justifyContent: "space-between",
    borderRadius: 5,
  },

  buttonGroupText: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    fontFamily: fonts.text
  },

  buttonVeiculoText: {
    color: '#252525',
    fontSize: 18,
    fontFamily: fonts.title
  },

  textInfo: {
    color: darkTheme.background,
    fontSize: 14,
    fontFamily: fonts.text
  },

  buttonVeiculoTextManutencaoGreen: {
    color: darkTheme.green,
    fontSize: 16,
    fontFamily: fonts.text
  },

  buttonVeiculoTextManutencaoRed: {
    color: darkTheme.red,
    fontSize: 16,
    fontFamily: fonts.text
  },

  imgVeiculo: {
    width: 120,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkTheme.textField,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  }
});

export default styles;