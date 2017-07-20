/**
 * Created by rajanmaharjan on 7/20/17.
 */


import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {Provider} from 'react-redux';
import  {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import configs from './configs';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const firebaseConfig = configs.firebaseConfig;
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;