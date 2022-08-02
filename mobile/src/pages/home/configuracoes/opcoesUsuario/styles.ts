import { StyleSheet } from "react-native";
import {darkTheme} from '../../../../Styles/colors'
import fonts from '../../../../Styles/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.background,
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  headerTitle: {
    color: darkTheme.grayLight,
    fontSize: 20,
    fontFamily: fonts.title
  },

  content: {
    flex:1,
    color: darkTheme.grayLight,
    justifyContent: "flex-start",
    width: "100%",
    height: "85%",
    paddingTop:20
  },

  foto:{
borderRadius:100,
height:150,
width:150,
backgroundColor:'black',
alignSelf:'center'
  },

  text: {
    color: darkTheme.grayLight,
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf:'center',
    fontFamily: fonts.text
  },

  top: {
    backgroundColor: darkTheme.textField,
    borderRadius: 10,
    borderColor: darkTheme.grayMedium,
    borderWidth: 1,
    borderBottomWidth: 1,
  },

  meio: {
    borderBottomWidth: 1,
    borderColor: darkTheme.grayMedium,
  },

});

export default styles;
