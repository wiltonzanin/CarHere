import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#252525',
        alignItems: 'center',
        padding: 30,
        justifyContent: 'space-between',
        height: '100%'
    },

    header: {
        width: '100%',
        height: 70,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 20
    },


    title: {
        color: '#F0EFF4',
        fontSize: 25,
        fontWeight: 'bold',
    },

    content: {
        width: '100%',
       // height: '91%',
        justifyContent: 'space-between',
     
    },

    buttonStyle: {
        height: '25%',
        justifyContent: 'center'
    },

    formLabel: {
        color: '#F0EFF4',
        fontSize: 18,
        //marginBottom: 10
    },

    input: {
        borderBottomColor: '#5863f8',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        color: '#F0EFF4',
        fontSize: 16,
        marginBottom: 25
        
    },

    button: {
        backgroundColor: '#5863f8',
        height: 60,
        borderRadius: 8,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: '#F0EFF4',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default styles;