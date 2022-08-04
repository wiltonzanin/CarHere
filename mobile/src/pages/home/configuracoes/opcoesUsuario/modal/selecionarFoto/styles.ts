import { StyleSheet } from "react-native";
import {darkTheme} from '../../../../../../Styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    paddingTop: 10,
    flexDirection: "row",
  },

  search: {
    justifyContent: "flex-start",
    paddingTop: 10
  },

  headerTitle: {
    color: darkTheme.grayLight,
    fontSize: 20,
    paddingTop: 10,
  },

  content: {
    color: darkTheme.grayLight,
    justifyContent: "flex-start",
    paddingTop: 20,
    width: "100%",
    height: "85%",
  },

  text: {
    color: darkTheme.grayLight,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf:'center'
  },

  top: {
    backgroundColor: darkTheme.textField,
    borderRadius: 10,
    borderColor: darkTheme.grayMedium,
    borderWidth: 1,
    borderBottomWidth: 1,
  },

  meio: {
    borderBottomWidth: 1,
    borderColor: darkTheme.grayMedium,
  },

  buttonContent: {
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  buttonText: {
    color: darkTheme.grayLight,
    justifyContent: "center",
    paddingLeft: 5,
  },

  buttonsSection: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
