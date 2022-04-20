import { StyleSheet } from "react-native";
import colors from '../../../Styles/colors'
import fonts from '../../../Styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  search: {
    justifyContent: "flex-start",
  },

  headerTitle: {
    color: colors.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  content: {
    color: colors.grayLight,
    justifyContent: "flex-start",
    height: "85%",
  },

  text: {
    color: colors.grayLight,
    fontSize: 20,
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

  buttonText: {
    color: colors.grayLight,
    paddingLeft: 5,
    fontFamily: fonts.text
  },

  bottomSection: {
    height: "100%",
  },

  buttonAvaliar: {
    height: 60,
    backgroundColor: colors.button,
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 5
  },

  bottomtext: {
    color: colors.grayLight,
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: fonts.text
  }
});

export default styles;
