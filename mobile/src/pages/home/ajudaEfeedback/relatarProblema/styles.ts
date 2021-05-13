import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "#F0EFF4",
    fontSize: 20,
  },

  content: {
    flex: 1,
    marginBottom: 20
  },

  text: {
    color: "#F0EFF4",
    fontSize: 20,
    paddingBottom: 20
  },

  textInput: {
    padding: 10,
    backgroundColor: '#333333',
    borderColor: '#525252',
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    color: '#F0EFF4',
    flex: 1
  },

  bottomtext: {
    color: "#F0EFF4",
    fontSize: 18,
    alignSelf: 'center',
  }
});

export default styles;
