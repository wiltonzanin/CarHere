import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
  },

  header: {
    width: "100%",
    paddingTop: 20,
    justifyContent: "space-between",
  },

  search: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textInput: {
    width: 50,
  },

  title: {
    color: "#F0EFF4",
    fontSize: 25,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#F0EFF4",
    fontSize: 20,
    fontWeight: "normal",
  },

  content: {
    width: "100%",
    alignContent: "space-between",
  },

  buttonAdicionar: {
    height: 120,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 20,
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    width: "100%",
  },

  drawerText: {
    color: "white",
    width: "60%",
    paddingHorizontal: 5,
  },

  buttonDrawer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },

  drawer: {
    backgroundColor: "#252525",
    textShadowColor: "#fff",
  },

  dropdown: {
    backgroundColor: "#333333",
    borderColor: "#525252",
    width: 80,
  },

  dropdownSegundo: {
    backgroundColor: "#333333",
    borderColor: "#525252",
    width: 200,
  },

  buttonStyle: {
    width: "100%",
    paddingTop: 20,
  },

  button: {
    height: 30,
    width: 30,
  },

  buttonText: {
    color: "#fff",
    fontSize: 28,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    textAlign: "center",
  },

  itens: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default styles;
