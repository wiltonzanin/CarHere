import { StyleSheet, Dimensions } from "react-native";
import { colorsDark } from "react-native-elements/dist/config";
import fonts from "../../Styles/fonts";
import colors from '../../Styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    
},

  title: {
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  buttonsHeader: {
    height: 30,
    width: 30,
  },

  text: {
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.text
  },

  content: {
    paddingTop: 20
  },

  imgVeiculo: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: Dimensions.get('window').width - 40,
    height: 200,
    resizeMode: 'cover',
  },

  cardImg: {
    backgroundColor: colors.grayLight,
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  card: {
    marginTop: 20,
    backgroundColor: colors.grayDark,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cardTitle: {
    fontFamily: fonts.title,
    color: colors.grayLight,
    fontSize: 20,
    marginBottom: 20,
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
    fontSize: 18,
    fontFamily: fonts.title
  },

  servicesText: {
    fontSize: 18,
    fontFamily: fonts.text
  },

  cardStyle: {
    backgroundColor: colors.grayDark,
    padding: 20,
    borderRadius: 10
  },

  drawer: {
    backgroundColor: colors.background,
  },

  drawerText: {
    color: colors.grayLight,
    fontFamily: fonts.text
  },
});

export default styles;
