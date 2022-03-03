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

    content: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
    },

    duvidas: {
        flexDirection: 'column',
    },

    containerText: {
        paddingLeft: 20,
        paddingRight: 20,
        color: '#F0EFF4',
    }
});

export default styles;