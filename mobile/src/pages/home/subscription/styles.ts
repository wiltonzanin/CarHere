import { StyleSheet } from "react-native";
import {darkTheme} from "../../../Styles/colors";
import fonts from "../../../Styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: darkTheme.background,
  },

  header: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "space-between",
  },

  title: {
    color: darkTheme.grayLight,
    fontSize: 20,
    // marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: fonts.title,
    alignSelf: "center",
  },

  text: {
    color: darkTheme.grayLight,
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "center",
    fontFamily: fonts.text,
  },
  image:{
    width: 199,
    height: 87,
    alignSelf: "center",
    marginBottom:20
  }
});

export default styles;
