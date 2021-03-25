import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        padding: 30,
        justifyContent: 'space-between'
    },

    header: {
        width: '100%',
        paddingTop: 20
    },

    title: {
        color: '#F0EFF4',
        fontSize: 25,
        fontWeight: 'bold',
    },

    content: {
        width: '100%',
        alignContent: 'space-between'
    },

    text: {
        color: '#F0EFF4',
        fontSize: 18,
        marginBottom: 10
    },

    buttonStyle: {
        width: '100%',
        paddingTop: 20
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

    dropdown: {
        backgroundColor: '#333333',
        borderColor: '#525252',
        
    }
});

export default styles;