/**
 * Created by rajanmaharjan on 7/25/17.
 */
import React, {Component} from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    StyleSheet,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import stylesImport from '../styles/styles';

const styles = StyleSheet.create(stylesImport());
import {CardSection, Spinner} from './common';

class ListItem extends Component {

    onRowPress() {
        Actions.employeeEdit({employee: this.props.employee});
    }

    render() {
        const {name} = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.listTitleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default ListItem;