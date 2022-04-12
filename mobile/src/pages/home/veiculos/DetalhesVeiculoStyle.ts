import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../Styles/colors";
import fonts from "../../../Styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    marginBottom: 10
  },

  card: {
    backgroundColor: colors.grayDark,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cardStyle: {
    backgroundColor: colors.grayDark,
    padding: 20,
    borderRadius: 10
  },

  text: {
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  cardTitle: {
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title,
    marginBottom: 20
  },

  imagesContainer: {
    backgroundColor: colors.grayDark,
    marginLeft: -20,
    marginRight: -20,
    marginBottom: -30,
    height: 300,
  },

  imgVeiculo: {
    width: Dimensions.get('window').width,
    height: 300,
    resizeMode: 'cover',
  },

  textStatusOk: {
    color: colors.green,
    fontSize: 14,
    fontFamily: fonts.text
  },

  textStatusWarning: {
    color: colors.yellow,
    fontSize: 14,
    fontFamily: fonts.text
  },

  textStatusError: {
    color: colors.red,
    fontSize: 14,
    fontFamily: fonts.text
  },

  servicos: {
    marginTop: 20,
  },

  cardServices: {
    backgroundColor: colors.grayLight,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
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
    fontWeight: 'bold',
  },

  noInfo: {
    backgroundColor: colors.grayLight,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    fontFamily: fonts.text
  },

  noInfoText: {
    color: "#252525",
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.text
  },

  info: {
    backgroundColor: colors.grayLight,
    padding: 10,
    borderRadius: 10,
    fontFamily: fonts.text
  },

  infoGroup: {
    backgroundColor: colors.grayLight,
    width: 145,
    height: 140,
    padding: 10,
    borderRadius: 10,
    fontFamily: fonts.text
  },

  titleInfo: {
    color: colors.background,
    fontSize: 18,
    paddingBottom: 5,
    fontFamily: fonts.title
  },

  textInfo2: {
    color: colors.background,
    fontSize: 14,
    fontFamily: fonts.text
  },

  deleteButton: {
    marginTop: 20
  }
});

export default styles;
