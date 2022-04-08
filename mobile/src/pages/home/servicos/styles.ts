import { StyleSheet } from "react-native";
import colors from "../../../Styles/colors";

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
  },

  headerGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonServiceTextGreen: {
    color: colors.green,
    fontSize: 16,
    padding: 35,
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
  },

  buttonServicoText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: 'bold',
  },

  buttonServicoTextManutencaoGreen: {
    color: colors.green,
    fontSize: 16
  },

  buttonServicoTextManutencaoRed: {
    color: colors.red,
    fontSize: 16,
  },
  textInfo3: {
    color: colors.background,
    fontSize: 14,
  },

});

export default styles;
