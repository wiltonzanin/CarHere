import { StyleSheet } from "react-native";
import colors from '../../../../Styles/colors'

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
    marginBottom: 20
  },

  headerTitle: {
    color: colors.grayLight,
    fontSize: 20
  },

  instructions: {
    color: colors.grayLight,
    fontSize: 16,
    textAlign: "auto",
  },

  formContent: {
    paddingTop: 20,
  },
});

export default styles;
