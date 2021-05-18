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
  },

  content: {
    height:'100%'
  },

  text:{
    paddingTop:10,
    color: "#F0EFF4",
    fontSize: 16,
  }

});

export default styles;
