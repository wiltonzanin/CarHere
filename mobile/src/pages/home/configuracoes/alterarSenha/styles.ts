import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
  },

  header: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  headerTitle: {
    color: "#F0EFF4",
    fontSize: 20
  },

  instructions: {
    color: "#F0EFF4",
    fontSize: 16,
    textAlign: "auto",
  },

  formContent: {
    paddingTop: 20,
  },

  button: {
    backgroundColor: "#8F1622",
    height: 60,
    borderRadius: 5,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#F0EFF4",
    fontSize: 18,
  },
});

export default styles;
