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

    labelOpcional:{
        color: 'rgba(240, 239, 244, 0.5)',
        fontSize: 10,
        paddingLeft: 10,
        paddingTop: 8
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
        height: 40
    },

    dropdownList: {
        backgroundColor: "#333333",
        borderColor: "#525252",
    },

    dropdownText: {
        fontSize: 16,
        color: "#F0EFF4",
    },

    imageSelector: {
        backgroundColor: '#333333',
        borderWidth: 1,
        borderColor: "#525252",
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 10
    },

    carImages:{
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: 10
    }
});

export default styles;