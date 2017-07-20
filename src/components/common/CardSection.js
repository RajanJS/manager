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

const CardSection = (props) => {
    return (
        <View style={styles.cardSectionContainer}>
            {props.children}
        </View>
    );
};

export {CardSection};

CardSection.propTypes = {
    children: PropTypes.node,
};
