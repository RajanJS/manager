/**
 * Created by rajanmaharjan on 7/20/17.
 */

import  React, {Component} from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View
} from 'react-native';


import stylesImport from '../../styles/styles';

const styles = StyleSheet.create(stylesImport());

const Input = ({label, value, onChangeText, placeholder, autoCorrect}) => {

    const {inputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput>
                placeholder={placeholder}
                autoCorrect={autoCorrect}
                style= {inputStyle}
                value={value}
                onChangeText={onChangeText}
            </TextInput>
        </View>
    );
};

export {Input};