import { StyleSheet } from "react-native";
import colors from '../../Styles/colors'

const styles = StyleSheet.create({
  text: {
    color: colors.grayLight,
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10,
  },

  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
