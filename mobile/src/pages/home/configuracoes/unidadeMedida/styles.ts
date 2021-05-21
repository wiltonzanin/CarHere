import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',

  },

  header: {
    paddingTop: 10,
    flexDirection: "row",
  },

  title: {
    color: "#F0EFF4",
    fontSize: 20,
    paddingBottom:10
  },

  content: {
    height:'100%'
  },

  inputGroup: {
    justifyContent: "space-between",

  },

  dropdown: {
    backgroundColor: "#333333",
    borderColor: "#525252",
  },
});

export default styles;
