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

    labelGroup: {
        flex: 1,
        flexDirection: 'row',
    },

    text: {
        color: '#F0EFF4',
        fontSize: 18,
        marginBottom: 10
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    inputGroupColumn: {
        flex: 1,
        marginRight: 15
    },

    inputGroupSecondColumn: {
        flex: 1
    },

    dropdown: {
        backgroundColor: "#333333",
        borderColor: "#525252",
        height: 40,
    },

    dropdownList: {
        backgroundColor: "#333333",
        borderColor: "#525252",
    },

    dropdownText: {
        fontSize: 16,
        color: "#F0EFF4",
    },

    consumoMedio: {
        marginTop: 20,
    },

    textResultado: {
        marginTop: 20,
        padding: 10,
        color: '#F0EFF4',
        fontSize: 32,
        alignSelf: 'center',
        borderColor: '#F0EFF4',
        borderWidth: 1,
        borderStyle: 'solid'
    },
});

export default styles;