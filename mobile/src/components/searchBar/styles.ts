import { StyleSheet } from "react-native";
import {darkTheme} from "../../Styles/colors";
import fonts from "../../Styles/fonts";

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
        backgroundColor: darkTheme.textField,
        fontFamily: fonts.text
    },

    boxButtonSearch: {
        width: 30,
        height: 30,
        position: "absolute",
        right: 0,
        backgroundColor: darkTheme.background,
    }
});

export default styles;
