import { StyleSheet } from "react-native";
import colors from '../../../../Styles/colors'
import fonts from '../../../../Styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20
  },

  header: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  text: {
    color: colors.grayLight,
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: fonts.text
  },

  top: {
    backgroundColor: colors.grayDark,
    borderRadius: 5,
    borderColor: colors.grayMedium,
    borderWidth: 1,
  },

  meio: {
    borderBottomWidth: 1,
    borderColor: colors.grayMedium,
  },
});

export default styles;
