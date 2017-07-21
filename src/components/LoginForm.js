/**
 * Created by rajanmaharjan on 7/20/17.
 */

import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';
import {emailChanged, passwordChanged} from '../actions';
import {connect} from 'react-redux';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value = {this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state =>{
    const {email, password} = state;
    return {
        email : email,
        password: password
    }
};

export default connect(mapStateToProps, {emailChanged,passwordChanged})(LoginForm);