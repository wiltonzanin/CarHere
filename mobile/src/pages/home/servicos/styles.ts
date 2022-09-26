import { StyleSheet } from "react-native";
import {darkTheme} from "../../../Styles/colors";
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

  buttonsHeader: {
    height: 30,
    width: 30,
  },

  headerText: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
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

  contentServico: {
    flexGrow: 1
  },

  ButtonText: {
    flexDirection: "column",
    padding: 10,
    fontFamily: fonts.text
  },

  headerGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonServiceTextGreen: {
    color: darkTheme.green,
    fontSize: 16,
    padding: 35,
    fontFamily: fonts.text
  },

  listagemErroServico: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  servicos: {
    marginTop: 20,
  },

  buttonServico: {
    backgroundColor: darkTheme.grayLight,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    marginTop: 20
  },

  buttonGroupTextServico: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    fontFamily: fonts.text
  },

  buttonServicoText: {
    color: darkTheme.background,
    fontSize: 18,
    fontFamily: fonts.title
  },

  buttonServicoTextManutencaoGreen: {
    color: darkTheme.green,
    fontSize: 16,
    fontFamily: fonts.text
  },

  buttonServicoTextManutencaoRed: {
    color: darkTheme.red,
    fontSize: 16,
    fontFamily: fonts.text
  },
  textInfo3: {
    color: darkTheme.background,
    fontSize: 14,
    fontFamily: fonts.text
  },

});

export default styles;
