import { StyleSheet } from "react-native";
import {darkTheme} from "../../Styles/colors";
import fonts from "../../Styles/fonts";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: darkTheme.textField,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    width: 300,
    backgroundColor: darkTheme.background,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  groupButton: {
    flexDirection: "row",
  },

  leftButton: {
    flex: 1,
    borderBottomLeftRadius: 20,
    backgroundColor: darkTheme.grayMedium,
    padding: 10,
  },

  rightButton: {
    flex: 1,
    padding: 10,
    borderBottomRightRadius: 20,
  },

  button: {
    width: 300,
    backgroundColor: darkTheme.grayMedium,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
  },

  textStyle: {
    color: darkTheme.grayLight,
    fontSize: 16,
    textAlign: "center",
    fontFamily: fonts.title,
  },

  modalText: {
    padding: 5,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    color: darkTheme.grayLight,
    fontFamily: fonts.text,
  },
});

export default styles;
