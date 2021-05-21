import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },

  content: {
    height: '100%'
  },

  header: {
    paddingTop: 10,
    flexDirection: "row",
  },

  accordionTitle: {
    color: "#F0EFF4",
    fontSize: 18,
  },

  textBody: {
    borderColor: '#525252',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20
  },

  title: {
    color: "#F0EFF4",
    fontSize: 16,
    fontWeight: 'bold'
  },

  text: {
    color: "#F0EFF4",
    textAlign: 'justify',
    fontSize: 14
  },
});

export default styles;
