import { StyleSheet } from "react-native";
import {darkTheme} from "../../../../Styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    paddingTop: 20,
  },

  title: {
    color: darkTheme.grayLight,
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 20,
  },

  instructions: {
    color: darkTheme.grayLight,
    fontSize: 16,
    textAlign: "auto",
  },

  buttonContent: {
    paddingTop: 20,
  },

});

export default styles;
