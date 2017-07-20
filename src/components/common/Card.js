/**
 * Created by rajanmaharjan on 7/11/17.
 */

import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';
import stylesImport from '../../styles/styles';

const styles = StyleSheet.create(stylesImport());

const Card = (props) => {
    return (
        <View style={styles.cardContainerStyle}>
            {props.children}
        </View>
    );
};

export {Card} ;

Card.propTypes = {
    children: PropTypes.array,
};
