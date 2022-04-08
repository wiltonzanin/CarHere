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
    marginBottom: 10,
  },
  
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonsHeader: {
    height: 30,
    width: 30,
  },

  headerText: {
    color: colors.grayLight,
    fontSize: 20,
  },

  content: {
    paddingTop: 20,
  },

  secao: {
    marginTop: 24,
  },

  title: {
      color: colors.grayLight,
      fontSize: 20,
  },

  subtitle: {
    fontSize: 16,
    color:'white'
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
    fontSize: 22,
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

  cardServices: {
    backgroundColor: colors.grayLight,
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
    fontWeight: "bold",
    fontSize: 18
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
    color: colors.background,
    fontSize: 18,
    textAlign: 'center'
  },

  info: {
    backgroundColor: colors.grayLight,
    padding: 10,
    borderRadius: 10,
  },

  infoGroup: {
    backgroundColor: colors.grayLight,
    width: 145,
    height: 140,
    padding: 10,
    borderRadius: 10
  },

  titleInfo: {
    color: colors.grayLight,
    fontSize: 18,
    paddingBottom: 5,
  },

  card: {
    backgroundColor: colors.grayDark,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },

  textInfo2: {
    color: colors.background,
    fontSize: 14,
  },

  deleteButton: {
    marginTop: 20
  },
  checkbox: {
    flexDirection: 'row',
    paddingBottom: 20
  },
  buttoncheckbox: {
    alignSelf: 'center'
  },

  textcheckbox: {
    color: colors.grayLight,
    fontSize: 15,

  },

});

export default styles;
