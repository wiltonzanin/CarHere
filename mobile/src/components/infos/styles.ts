import { StyleSheet } from "react-native";
import colors from '../../Styles/colors'

const styles = StyleSheet.create({
  autonomia: {
    backgroundColor: colors.grayLight,
    width: 145,
    height: 140,
    padding: 10,
    borderRadius: 10
  },

  textInfo1: {
    color: colors.background,
    fontSize: 18,
    paddingBottom: 5,
  },

  textInfo2: {
    color: colors.background,
    fontSize: 14,
  },

  textInfo: {
    color: colors.grayLight,
    fontSize: 18,
  },

  textInfoService: {
    color: colors.grayLight,
    fontSize: 18,
    fontWeight: 'bold',
  },


  textInfoCampo: {
    color: colors.grayLight,
    fontSize: 16,
    paddingBottom: 20,
  },

  textInfoCampo1: {
    color: colors.grayLight,
    fontSize: 16,
    paddingBottom: 20,
    paddingHorizontal: 10
  },

  card: {
    maxHeight: 10,
  },


  infos: {
    flexDirection: "row",
    justifyContent: "space-between",
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

  ButtonText: {
    flexDirection: "column",
    padding: 10,
  },

  buttonGroupText: {
    justifyContent: "space-between",
  },

  buttonServiceTextGreen: {
    color: colors.green,
    fontSize: 16,
    padding: 35,
  },

  buttonVeiculoTextManutencaoRed: {
    color: colors.red,
    fontSize: 16,
    padding: 35,
  },
});

export default styles;
