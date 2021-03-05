import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        alignItems: 'center',
    },

    header: {
        backgroundColor: '#F0EFF4',
        width: '100%',
        height: 240,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    imgFlag: {
        marginTop: '8%',
        marginLeft: '-6%'
    },

    textFooterAlign: {
        marginTop: '15%',
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
        paddingTop: '40%'
    },

    contentText: {
        color: '#F0EFF4',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    buttonsSection: {
        width: '80%',
        paddingTop: '20%'
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
        paddingTop: 10,
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