import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
    },

    //Teste modal

    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(51, 51, 51, 0.7)',
        justifyContent: "center",
        alignItems: "center",
    },

    modalView: {
        width: 300,
        backgroundColor: "#252525",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    button: {
        width: 300,
        backgroundColor: '#525252',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,
    },

    textStyle: {
        color: "#F0EFF4",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },

    modalText: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        color: '#F0EFF4'
    }
});

export default styles;