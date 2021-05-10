import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    paddingTop: 10,
    flexDirection: "row",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    paddingTop: 10
  },

  search: {
    justifyContent: "flex-start",
    width: "30%",
  },

  button: {
    paddingTop: 10,
    height: 30,
    width: 30,
  },

  buttonContent: {
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
  },

  top: {
    backgroundColor: "#333333",
    borderRadius: 10,
    borderColor: '#525252',
    borderWidth: 1,
    borderBottomWidth: 1
  },

  meio: {
    borderBottomWidth: 1,
    borderColor: '#525252',
  },

  buttonsSection: {
    width: "100%",
    height: "100%",
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonText: {
    color: "#fff",
    justifyContent: "center",
    paddingLeft: 5
  },

  text: {
    color: "#fff",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },

  content: {
    color: "#fff",
    justifyContent: "flex-start",
    paddingTop: 20,
    width: "100%",
    height: "85%",
  },
});

export default styles;
