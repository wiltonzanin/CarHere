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
    paddingTop: 20,
    justifyContent: "space-between",
  },

  title: {
    color: colors.grayLight,
    fontSize: 20,
    // marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: fonts.title,
    alignSelf: "center",
  },

  centeredView: {
    alignContent: "center",
  },

  text: {
    color: colors.grayLight,
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "center",
    fontFamily: fonts.text,
  },
});

export default styles;
