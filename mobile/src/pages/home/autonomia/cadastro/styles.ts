import { StyleSheet } from "react-native";
import { darkTheme } from "../../../../Styles/colors";
import fonts from "../../../../Styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: darkTheme.background,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    marginBottom: 20
  },

  title: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.title,
  },

  labelGroup: {
    flex: 1,
    flexDirection: "row",
  },

  text: {
    color: darkTheme.grayLight,
    fontSize: 18,
    marginBottom: 10,
    fontFamily: fonts.text,
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputGroupColumn: {
    flex: 1,
    marginRight: 15,
  },

  inputGroupSecondColumn: {
    flex: 1,
  },

  dropdown: {
    backgroundColor: darkTheme.textField,
    borderColor: darkTheme.grayMedium,
    height: 40,

  },

  dropdownList: {
    backgroundColor: darkTheme.textField,
    borderColor: darkTheme.grayMedium,
  },

  dropdownText: {
    fontSize: 16,
    color: darkTheme.grayLight,
    fontFamily: fonts.text,
  },

  consumoMedio: {
    marginTop: 20,
    marginBottom: 20,
  },

  textResultado: {
    marginTop: 20,
    padding: 10,
    color: darkTheme.grayLight,
    fontSize: 32,
    alignSelf: "center",
    fontFamily: fonts.text,
  },
});

export default styles;
