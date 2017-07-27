/**
 * Created by rajanmaharjan on 7/26/17.
 */
import React from 'react';
import {
    Text,
    View,
    Modal,
    StyleSheet
} from 'react-native';

import {CardSection} from './CardSection';
import {Button} from './Button';
import stylesImport from '../../styles/styles';
const styles = StyleSheet.create(stylesImport());


const Confirm = ({children, visible, onAccept, onDecline}) => {
    const {modalCardSection, modalTextStyle, modalContainerStyle} = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {
            }}
        >
            <View style={modalContainerStyle}>
                <CardSection style={modalCardSection}>
                    <Text style={modalTextStyle}>
                        {children}
                    </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    )
};

export {Confirm};