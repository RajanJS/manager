/**
 * Created by rajanmaharjan on 7/20/17.
 */

import React from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';


import stylesImport from '../../styles/styles';

const styles = StyleSheet.create(stylesImport());

const Spinner = ({size}) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator
                size={size || 'large'}
            />
        </View>
    );
};

export {Spinner};