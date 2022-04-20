import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../Styles/colors";

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
  },

  cardTitle: {
    color: colors.grayLight,
    fontSize: 20,
    fontWeight: 'bold',
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
  },

  textStatusWarning: {
    color: colors.yellow,
    fontSize: 14,
  },

  textStatusError: {
    color: colors.red,
    fontSize: 14,
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
  },

  servicesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20
  },

  servicesTitle: {
    fontWeight: "bold",
    fontSize: 18
  },

  buttonServicoText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: 'bold',
  },

  servicesText: {
    fontSize: 18
  },

  noInfo: {
    backgroundColor: colors.grayLight,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },

  noInfoText: {
    color: "#252525",
    fontSize: 18,
    textAlign: 'center'
  },

  info: {
    backgroundColor: colors.grayLight,
    padding: 10,
    height: 100,
    borderRadius: 5,
  },

  infoGroup: {
    backgroundColor: colors.grayLight,
    width: 145,
    height: 140,
    padding: 10,
    borderRadius: 10
  },

  titleInfo: {
    color: colors.background,
    fontSize: 18,
    paddingBottom: 5,
  },

  textInfo2: {
    color: colors.background,
    fontSize: 14,
  },

  deleteButton: {
    marginTop: 20
  }
});

export default styles;
