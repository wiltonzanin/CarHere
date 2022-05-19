import { StyleSheet } from "react-native";
import colors from "../../../Styles/colors";
import fonts from "../../../Styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: colors.background,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },

  title: {
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title,
  },

  labelGroup: {
    flex: 1,
    flexDirection: "row",
  },

  text: {
    color: colors.grayLight,
    fontSize: 18,
    marginBottom: 10,
    fontFamily: fonts.text,
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  inputGroupColumn: {
    flex: 1,
    marginRight: 15,
  },

  inputGroupSecondColumn: {
    flex: 1,
  },

  dropdown: {
    backgroundColor: colors.grayDark,
    borderColor: colors.grayMedium,
    height: 40,
    
  },

  dropdownList: {
    backgroundColor: colors.grayDark,
    borderColor: colors.grayMedium,
  },

  dropdownText: {
    fontSize: 16,
    color: colors.grayLight,
    fontFamily: fonts.text,
  },

  consumoMedio: {
    marginTop: 20,
    marginBottom: 20,
  },

  textResultado: {
    marginTop: 20,
    padding: 10,
    color: colors.grayLight,
    fontSize: 32,
    alignSelf: "center",
    borderColor: colors.grayLight,
    borderWidth: 1,
    borderStyle: "solid",
    fontFamily: fonts.text,
  },
});

export default styles;
