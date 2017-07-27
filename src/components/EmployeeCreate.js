/**
 * Created by rajanmaharjan on 7/24/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import stylesImport from '../styles/styles';

const styles = StyleSheet.create(stylesImport());
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';
import EmployeeForm from './EmployeeForm';
class EmployeeCreate extends Component {
    componentWillMount() {
        this.props.name = null;
        this.props.phone = null;
        this.props.shift = null;
        console.log('Create',this.props);
    }

    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};

};

export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate
})(EmployeeCreate);