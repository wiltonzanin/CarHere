import { StyleSheet } from "react-native";
import colors from '../../Styles/colors'

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: colors.grayDark,
        justifyContent: "center",
        alignItems: "center",
    },

    modalView: {
        width: 300,
        backgroundColor: colors.background,
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

    groupButton: {
        flexDirection: "row",
    },

    leftButton: {
        flex: 1,
        borderBottomLeftRadius: 20,
        backgroundColor: colors.grayMedium,
        padding: 10,
    },

    rightButton: {
        flex: 1,
        padding: 10,
        borderBottomRightRadius: 20,
    },

    button: {
        width: 300,
        backgroundColor: colors.grayMedium,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,
    },

    textStyle: {
        color: colors.grayLight,
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },

    modalText: {
        padding: 5,
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        color: colors.grayLight
    }
});

export default styles;
