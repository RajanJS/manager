/**
 * Created by rajanmaharjan on 7/20/17.
 */

import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

const Spinner = ({size}) => {
    return (
        <View>
            <ActivityIndicator
                size={size || 'large'}
            />
        </View>
    );
};

export {Spinner};