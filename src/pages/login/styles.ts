import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 20
    },

    header: {
        backgroundColor: '#F0EFF4',
        alignSelf: 'stretch',
        height: '30%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    imgFlag: {
        marginTop: 20,
        marginLeft: '-11%'
    },

    textHeaderAlign: {
        paddingTop: 50,
        marginLeft: '8%'
    },

    title: {
        color: '#252525',
        fontSize: 35,
        fontWeight: 'bold',
    },

    subtitle: {
        color: '#252525',
        fontSize: 18,
        paddingTop: 5
    },

    content: {
        width: '80%',  
    },

    formLabel: {
        color: '#F0EFF4',
        fontSize: 18,
        marginBottom: 10
    },

    input: {
        height: 40,
        padding: 10,
        backgroundColor: '#333333',
        borderColor: '#525252',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
        color: '#F0EFF4',
        fontSize: 16,
        marginBottom: 25       
    },

    buttonsSection: {
        width: '80%',
        paddingBottom: 15        
    },

    button: {
        backgroundColor: '#5863f8',
        height: 60,
        borderRadius: 8,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: '#F0EFF4',
        fontSize: 20,
        fontWeight: 'bold',
    },

    texteButton:{
        alignItems: 'center',
        justifyContent: 'center'
    },

    registerText: {
        paddingTop: 12,
        color: '#F0EFF4',
        fontSize: 18,
    },

    registerTextBold: {
        color: '#F0EFF4',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;