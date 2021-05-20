import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'space-between'
    },

    header: {
        width: '100%',
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    title: {
        color: '#F0EFF4',
        fontSize: 20,
    },

    subtitle:{
        fontStyle:'italic',
        color:'#fff'
    },
    
  content: {
    height:'100%',
  },

  text:{
      color:'#fff',
      fontSize:18,
      paddingTop:10
  },
  dropdown: {
    backgroundColor: '#333333',
    borderColor: '#525252',
},

buttonStyle: {
    width: '100%',
    paddingTop: 20
},

});

export default styles;