import { StyleSheet } from "react-native";
import colors from "../../../../Styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    paddingTop: 20,
  },

  title: {
    color: colors.grayLight,
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 20,
  },

  instructions: {
    color: colors.grayLight,
    fontSize: 16,
    textAlign: "auto",
  },

  buttonContent: {
    paddingTop: 20,
  },

});

export default styles;
