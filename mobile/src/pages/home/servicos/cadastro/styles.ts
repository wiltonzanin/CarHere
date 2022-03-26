import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: "#252525"
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },

  title: {
    color: '#F0EFF4',
    fontSize: 20,
  },

  text: {
    color: '#F0EFF4',
    fontSize: 18,
    marginBottom: 10
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputGroupColumn: {
    flex: 1,
    marginLeft: 15
  },

  inputGroupSecondColumn: {
    flex: 1
  },

  dropdown: {
    backgroundColor: "#333333",
    borderColor: "#525252",
    height: 40,
    marginBottom: 20
  },

  dropdownList: {
    backgroundColor: "#333333",
    borderColor: "#525252",
  },

  dropdownText: {
    fontSize: 16,
    color: "#F0EFF4",
  },

  textInput: {
    padding: 10,
    //height: 40,
    minHeight: 85, 
    backgroundColor: '#333333',
    borderColor: '#525252',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    color: '#F0EFF4',
    flex: 1,
    marginBottom: 20  
  },

  /*: {
    height: 40,
    padding: 10,
    backgroundColor: '#333333',
    borderColor: '#525252',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    color: '#F0EFF4',
    fontSize: 16,  
}*/

Icon: {
  padding: 10,
},

checkbox: {
  flexDirection: 'row',
  paddingBottom: 20
},
buttoncheckbox: {
  alignSelf: 'center'
},

textcheckbox: {
  color: '#F0EFF4',
  fontSize: 15,

},

});

export default styles;