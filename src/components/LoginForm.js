/**
 * Created by rajanmaharjan on 7/20/17.
 */

import React, {Component} from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {connect} from 'react-redux';

import stylesImport from '../styles/styles';

const styles = StyleSheet.create(stylesImport());

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large"/>;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
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
                        value={this.props.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({auth}) => { // state.auth
    const {email, password, error, loading} = auth;
    return {email, password, error, loading};
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);