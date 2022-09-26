import { StyleSheet } from "react-native";
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
    marginBottom: 20,
  },

  title: {
    color: darkTheme.grayLight,
    fontSize: 20,
  },

  card: {
    backgroundColor: darkTheme.textField,
    padding: 20,
    borderRadius: 10
  },

  checkbox: {
    flexDirection: 'row',
    marginTop: 20
  },

  buttoncheckbox: {
    alignSelf: 'center'
  },

  textcheckbox: {
    color: darkTheme.grayLight,
    fontSize: 15,
  },

  deleteButton: {
    marginTop: 20
  }
});

export default styles;
