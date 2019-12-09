/**
 * Created by rajanmaharjan on 7/26/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Picker,
    StyleSheet
} from 'react-native';

import stylesImport from '../styles/styles';

const styles = StyleSheet.create(stylesImport());

import {CardSection, Input} from './common';
import {employeeUpdate} from '../actions';
import {connect} from 'react-redux';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>
                <CardSection style={{flexDirection: "column"}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        // style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};

};


export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);