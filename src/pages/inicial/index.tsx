import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import styles from './styles';
import TextField from '../../components/textField'


function Inicial() {

    const { navigate } = useNavigation();

    function handleNavigateToCadastroUsarioPage() {
        navigate('CadastroUsuario');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textHeaderAlign}>
                    <Text style={styles.title}>Bem vindo!</Text>
                    <Text style={styles.subtitle}>Estamos muito felizes {'\n'}com a sua chegada :)</Text>
                </View>
                <Svg style={styles.imgFlag} width="526" height="82" fill="none">
                    <Path d="M96.7902 0H144.5l-16.393 27.0047h-47.71L96.7902 0zM287.584 0h47.71L318.9 27.0047h-47.71L287.584 0zM192.584 0h47.71L223.9 27.0047h-47.71L192.584 0zM383.377 0h47.71l-16.393 27.0047h-47.71L383.377 0zM478.184 0h47.71L509.5 27.0047h-47.71L478.184 0zM64 54h47.71L95.3167 81.0047h-47.71L64 54zM254.793 54h47.71L286.11 81.0047H238.4L254.793 54zM159.793 54h47.71L191.11 81.0047H143.4L159.793 54zM350.587 54h47.71l-16.394 27.0047h-47.71L350.587 54zM445.393 54h47.71L476.71 81.0047H429L445.393 54z" fill="#252525" />
                    <Path d="M128.1 27h47.71l-16.393 27.0047h-47.71L128.1 27zM32.7933 27h47.71L64.11 54.0047H16.4L32.7933 27zM318.893 27h47.71L350.21 54.0047H302.5L318.893 27zM223.893 27h47.71L255.21 54.0047H207.5L223.893 27zM414.687 27h47.71l-16.394 27.0047h-47.71L414.687 27z" fill="#252525" />
                    <Path d="M80.3936 27h47.7104L111.71 54.0047H64.0003L80.3936 27zM271.187 27h47.71l-16.393 27.0047h-47.71L271.187 27zM176.187 27h47.71l-16.393 27.0047h-47.71L176.187 27zM366.98 27h47.71l-16.393 27.0047h-47.71L366.98 27z" fill="#F0EFF4" />
                    <Path d="M80.3936 27h47.7104L111.71 54.0047H64.0003L80.3936 27zM271.187 27h47.71l-16.393 27.0047h-47.71L271.187 27zM176.187 27h47.71l-16.393 27.0047h-47.71L176.187 27zM366.98 27h47.71l-16.393 27.0047h-47.71L366.98 27z" fill="#F0EFF4" />
                    <Path d="M80.3936 27h47.7104L111.71 54.0047H64.0003L80.3936 27zM271.187 27h47.71l-16.393 27.0047h-47.71L271.187 27zM176.187 27h47.71l-16.393 27.0047h-47.71L176.187 27zM366.98 27h47.71l-16.393 27.0047h-47.71L366.98 27zM461.787 27h47.71l-16.393 27.0047h-47.71L461.787 27zM144.5 0h47.71l-16.393 27.0047h-47.71L144.5 0z" fill="#F0EFF4" />
                    <Path d="M49.1934 0h47.71L80.5101 27.0047h-47.71L49.1934 0zM335.293 0h47.71L366.61 27.0047H318.9L335.293 0zM240.293 0h47.71L271.61 27.0047H223.9L240.293 0zM431.087 0h47.71l-16.394 27.0047h-47.71L431.087 0zM111.7 54h47.71l-16.393 27.0047H95.3067L111.7 54zM16.3933 54h47.71L47.71 81.0047H.00003L16.3933 54zM302.493 54h47.71L333.81 81.0047H286.1L302.493 54zM207.493 54h47.71L238.81 81.0047H191.1L207.493 54zM398.287 54h47.71l-16.394 27.0047h-47.71L398.287 54z" fill="#F0EFF4" />
                </Svg>
            </View>
            <View style={styles.content}>
                <TextField labelName="Email" />
                <TextField labelName="Senha" />
                <RectButton style={styles.textButton} rippleColor='#1C00ff00'>
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </RectButton>
            </View>
            <View style={styles.buttonsSection}>
                <RectButton style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
                <RectButton onPress={handleNavigateToCadastroUsarioPage} style={styles.textButton}>
                    <Text style={styles.registerText}>
                        Não tem uma conta!
                        <Text style={styles.registerTextBold}> Cadastre-se</Text>
                    </Text>
                </RectButton>
            </View>
        </View>
    );
}

export default Inicial;