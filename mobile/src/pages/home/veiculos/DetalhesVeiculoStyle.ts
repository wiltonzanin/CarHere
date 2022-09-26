import { StyleSheet, Dimensions } from "react-native";
import { darkTheme } from "../../../Styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    marginBottom: 10
  },

  card: {
    backgroundColor: darkTheme.textField,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cardStyle: {
    backgroundColor: darkTheme.textField,
    padding: 20,
    borderRadius: 10
  },

  text: {
    color: darkTheme.grayLight,
    fontSize: 20,
  },

  cardTitle: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },

  imagesContainer: {
    backgroundColor: darkTheme.textField,
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
    color: darkTheme.green,
    fontSize: 14,
  },

  textStatusWarning: {
    color: darkTheme.yellow,
    fontSize: 14,
  },

  textStatusError: {
    color: darkTheme.red,
    fontSize: 14,
  },

  cardServices: {
    backgroundColor: darkTheme.grayLight,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },

  buttonServico: {
    backgroundColor: darkTheme.grayLight,
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
    color: darkTheme.background,
    fontSize: 18,
    fontWeight: 'bold',
  },

  servicesText: {
    fontSize: 18
  },

  noInfo: {
    backgroundColor: darkTheme.grayLight,
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
    backgroundColor: darkTheme.grayLight,
    padding: 10,
    height: 100,
    borderRadius: 5,
  },

  infoGroup: {
    backgroundColor: darkTheme.grayLight,
    width: 145,
    height: 140,
    padding: 10,
    borderRadius: 10
  },

  titleInfo: {
    color: darkTheme.background,
    fontSize: 18,
    paddingBottom: 5,
  },

  textInfo2: {
    color: darkTheme.background,
    fontSize: 14,
  },

  deleteButton: {
    marginTop: 20
  }
});

export default styles;
