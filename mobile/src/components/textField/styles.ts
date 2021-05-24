import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    labelGroup: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    formLabel: {
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

    labelErro: {
        color: '#f83a53',
        fontSize: 12,
        paddingTop: 5
    },

    inputGroup:{
        marginBottom: 20    
    },
    
    input: {
        height: 40,
        padding: 10,
        backgroundColor: '#333333',
        borderColor: '#525252',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
        color: '#F0EFF4',
        fontSize: 16,   
    }
});

export default styles;