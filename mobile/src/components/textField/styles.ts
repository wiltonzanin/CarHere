import { StyleSheet } from 'react-native';
import {darkTheme} from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const styles = StyleSheet.create({

    labelGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    formLabel: {
        color: darkTheme.grayLight,
        fontSize: 18,
        marginBottom: 10,
        fontFamily: fonts.text
    },

    labelOpcional:{
        color: 'rgba(240, 239, 244, 0.5)',
        fontSize: 10,
        paddingLeft: 10,
        paddingTop: 8
    },

    labelErro: {
        color: '#f83a53',
        fontSize: 12,
        paddingTop: 5,
    },

    inputGroup:{
        marginBottom: 20    
    },
    
    input: {
        height: 40,
        padding: 10,
        backgroundColor: darkTheme.textField,
        borderColor: darkTheme.grayMedium,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
        color: darkTheme.grayLight,
        fontSize: 16,   
        fontFamily: fonts.text
    }
});

export default styles;