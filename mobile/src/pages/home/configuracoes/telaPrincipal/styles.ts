import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20
  },

  search: {
    paddingTop: 10
  },

  headerTitle: {
    color: "#F0EFF4",
    fontSize: 20,
    paddingTop: 10,
  },

  sectionTitle: {
    color: "#F0EFF4",
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  buttonsGroup: {
    backgroundColor: "#333333",
    borderRadius: 10,
    borderColor: "#525252",
    borderWidth: 1,
    borderBottomWidth: 1,
  },

  buttonsGroupContent: {
    borderBottomWidth: 1,
    borderColor: "#525252",
  },

  buttonText: {
    color: "#F0EFF4",
    justifyContent: "center",
    paddingLeft: 5,
  }
});

export default styles;
