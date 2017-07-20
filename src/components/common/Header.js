/**
 * Created by rajanmaharjan on 7/10/17.
 */
import  React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

import PropTypes from 'prop-types';
import stylesImport from '../../styles/styles';

const styles = StyleSheet.create(stylesImport());

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{props.headerText}</Text>
        </View>
    );
};

export {Header} ;

// Header.propTypes = {
//     headerText: PropTypes.string,
// };
