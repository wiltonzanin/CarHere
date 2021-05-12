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
  
  search: {
    justifyContent: "flex-start",
    width: "30%",
  },

  button: {
    paddingTop:10,
    height: 30,
    width: 30,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    paddingTop:10
  },

  content: {
    color: "#fff",
    justifyContent: "flex-start",
    paddingTop: 20,
    width: "100%",
    height: "75%",
  },
  
  text: {
    color: "#fff",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  
  bottomSection: {
    width: "100%",
    height: "100%",
  },

  bottomtext:{
    color: "#fff",
    fontSize: 18,
    alignSelf:'center',
  }
 
});

export default styles;
