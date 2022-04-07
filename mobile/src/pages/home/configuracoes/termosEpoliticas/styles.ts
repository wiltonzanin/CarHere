import { StyleSheet } from "react-native";
import colors from '../../../../Styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: colors.grayLight,
    fontSize: 20
  },

  accordion: {
    backgroundColor: colors.background
  },

  accordionTitle: {
    color: colors.grayLight,
    fontSize: 18,
  },

  textBody: {
    borderColor: colors.grayMedium,
    padding: 20,
    borderRadius: 5,
    marginBottom: 20
  },

  title: {
    color: colors.grayLight,
    fontSize: 16,
    fontWeight: 'bold'
  },

  text: {
    color: colors.grayLight,
    textAlign: 'justify',
    fontSize: 14
  },
});

export default styles;
