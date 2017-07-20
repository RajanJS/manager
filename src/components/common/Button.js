/**
 * Created by rajanmaharjan on 7/11/17.
 */

import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';
import stylesImport from '../../styles/styles';

const styles = StyleSheet.create(stylesImport());

const Button = ({onPress, children}) => {
    const {cardButtonStyle, cardButtonText} = styles;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={cardButtonStyle}>
            <Text style={cardButtonText}>{children}</Text>
        </TouchableOpacity>
    );
};

export {Button} ;

Button.propTypes = {
    children: PropTypes.string,
    onPress: PropTypes.func
};

