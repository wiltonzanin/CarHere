import { StyleSheet } from "react-native";
import colors from "../../../Styles/colors";
import fonts from "../../../Styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  search: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    color: colors.green,
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
    backgroundColor: colors.grayLight,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },

  buttonGroupTextServico: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    fontFamily: fonts.text
  },

  buttonServicoText: {
    color: colors.background,
    fontSize: 18,
    fontFamily: fonts.title
  },

  buttonServicoTextManutencaoGreen: {
    color: colors.green,
    fontSize: 16,
    fontFamily: fonts.text
  },

  buttonServicoTextManutencaoRed: {
    color: colors.red,
    fontSize: 16,
    fontFamily: fonts.text
  },
  textInfo3: {
    color: colors.background,
    fontSize: 14,
    fontFamily: fonts.text
  },

});

export default styles;
