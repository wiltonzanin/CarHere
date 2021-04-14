import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        padding: 20,
        justifyContent: 'space-between'
    },

    header: {
        width: '100%',
        paddingTop: 10,       
    },

    button: {
       height: 30,
       width: 30,
    },

    buttonContent:{
        backgroundColor: '#5863f8',
        height: 60,
        borderRadius: 8,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,    
    },
    
    buttonSalvar: {
        backgroundColor: '#5863f8',
        height: 60,
        width: 100,
        borderRadius: 8,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,  
        
     },

    buttonsSection:{
        //backgroundColor:'red',
        width: '100%',
        height: '100%',
       // paddingLeft:'70%'
    },

    inputGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    buttonCancelar:{
        backgroundColor: '#5863f8',
        height: 60,
        width: 100,
        borderRadius: 8,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,  
    },

    buttonText:{
        color:"#fff",
        justifyContent:'center'
    },

    drawer: {
        backgroundColor: '#252525',
    },

    text: {
        color:"#fff"
    },

    content: {
        color:'#fff',
        justifyContent:'flex-start',
        paddingTop: 20,
        width: '100%',
        height: '85%'
    }

});

export default styles;