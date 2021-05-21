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

    termosECondicoes: {
        flexDirection: 'row',
        paddingBottom: 20
    },

    buttonTermosECondicoes: {
        alignSelf: 'center'
    },

    textTermosECondicoes: {
        color: '#F0EFF4',
        fontSize: 15,
        textDecorationLine: 'underline'
    }
});

export default styles;