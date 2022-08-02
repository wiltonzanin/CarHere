import { StyleSheet } from 'react-native';
import {darkTheme} from '../../Styles/colors'
import fonts from '../../Styles/fonts'

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
        color: darkTheme.grayLight,
        fontSize: 20,
        fontFamily: fonts.title
    },

    termosECondicoes: {
        flexDirection: 'row',
        paddingBottom: 20
    },

    buttonTermosECondicoes: {
        alignSelf: 'center'
    },

    textTermosECondicoes: {
        color: darkTheme.grayLight,
        fontSize: 15,
        textDecorationLine: 'underline',
        fontFamily: fonts.text
    },

    containerModalLoading: {
        flex: 1,
        backgroundColor: 'rgba(51, 51, 51, 0.7)',
        justifyContent: "center",
        alignItems: "center",
    },

    modalLoadingText: {
        marginTop: 20,
        color: darkTheme.grayLight,
        fontSize: 15,
        fontFamily: fonts.text
    }
});

export default styles;