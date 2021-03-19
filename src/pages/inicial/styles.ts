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
        height: '25%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    textHeaderAlign: {
        paddingTop: 50,
        marginLeft: '8%'
    },

    title: {
        color: "#252525",
        fontSize: 35,
        fontWeight: 'bold',
    },

    subtitle: {
        color: "#252525",
        fontSize: 18,
        paddingTop: 5
    },

    imgFlag: {
        marginTop: 20,
        marginLeft: '-11%'
    },

    content: {
        width: '80%',
    },

    forgotPassword: {
        color: '#F0EFF4',
        fontSize: 14,
        marginTop: -15,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
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

    textButton:{
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