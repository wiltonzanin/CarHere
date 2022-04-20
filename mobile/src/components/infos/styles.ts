import { StyleSheet } from "react-native";
import colors from '../../Styles/colors'
import fonts from '../../Styles/fonts'

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
    fontFamily: fonts.text
  },

  textInfo2: {
    color: colors.background,
    fontSize: 14,
    fontFamily: fonts.text
  },

  textInfo: {
    color: colors.grayLight,
    fontSize: 18,
    fontFamily: fonts.text
  },

  textInfoService: {
    color: colors.grayLight,
    fontSize: 18,
    fontFamily: fonts.title
  },


  textInfoCampo: {
    color: colors.grayLight,
    fontSize: 16,
    paddingBottom: 20,
    fontFamily: fonts.text
  },

  textInfoCampo1: {
    color: colors.grayLight,
    fontSize: 16,
    paddingBottom: 20,
    paddingHorizontal: 10,
    fontFamily: fonts.text
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
    fontFamily: fonts.text
  },

  buttonGroupText: {
    justifyContent: "space-between",
    fontFamily: fonts.text
  },

  buttonServiceTextGreen: {
    color: colors.green,
    fontSize: 16,
    padding: 35,
    fontFamily: fonts.text
  },

  buttonVeiculoTextManutencaoRed: {
    color: colors.red,
    fontSize: 16,
    padding: 35,
    fontFamily: fonts.text
  },
});

export default styles;
