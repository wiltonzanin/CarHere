import React from 'react';

import { Feather } from "@expo/vector-icons";
import { Dimensions, Animated, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import {darkTheme} from '../../Styles/colors';

export default function SearchBar() {
    const animation = new Animated.Value(30);
    const { width } = Dimensions.get('window');

    function onSearch() {
        Animated.spring(animation, {
            toValue: width * 0.7,
            useNativeDriver: false,
        }).start();
    }

    return (
        <Animated.View style={[styles.container, {width: animation}]}>
            <TextInput style={styles.textInput}/>
            <TouchableOpacity onPress={onSearch} style={styles.boxButtonSearch}>
                <Feather name="search" size={25} color={darkTheme.grayLight} />
            </TouchableOpacity>
        </Animated.View>
    );
}