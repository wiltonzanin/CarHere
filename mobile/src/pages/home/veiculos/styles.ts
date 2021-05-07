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
  button: {
    height: 30,
    width: 30,
  },
  
  content: {
    width: "100%",
    alignContent: "space-between",
    paddingTop:20
  },
  
  text: {
    color: "white",
    fontSize:20
  },

  buttonContent:{
    height: 28,
    //padding: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor:'#5863F8'
  },

  buttonText:{
    color: "#fff",
    fontSize: 14,
    padding: 5,
    width: "100%",
    textAlign: "center",
  }

});

export default styles;
