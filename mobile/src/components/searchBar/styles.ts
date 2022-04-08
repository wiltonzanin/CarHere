import { StyleSheet } from "react-native";
import colors from "../../Styles/colors";

const styles = StyleSheet.create({

    container: {
        width: 30,
        height: 30,
        borderRadius: 8,
    },

    textInput: {
        flex: 1,
        marginRight: 40,
        marginLeft: 10,
        color: "#999",
        backgroundColor: colors.grayDark,
    },

    boxButtonSearch: {
        width: 30,
        height: 30,
        position: "absolute",
        right: 0,
        backgroundColor: colors.background,
    }
});

export default styles;
