import { StyleSheet } from "react-native";
import {darkTheme} from "../../../../../Styles/colors";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute'
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '30%',
    backgroundColor: darkTheme.textField,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5
  },
  text: {
    marginTop: 50,
    textAlign: 'center'
  },

  btn: {
    flex: 1,
    backgroundColor: '#8F1622',
    marginTop: 20,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },

  textTitle: {
    color: '#F0EFF4',
    fontSize: 18,
    paddingTop: 15
  },

  imgVeiculo: {
    backgroundColor: darkTheme.textField,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignSelf: 'center'
  },

  buttonFoto: {
    height: 75,
    width: 65,
  },

  textModal: {
    color: '#F0EFF4',
    alignSelf: 'center'
  }
})

export default styles;
