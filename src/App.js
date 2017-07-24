/**
 * Created by rajanmaharjan on 7/20/17.
 */


import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import configs from './configs';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const firebaseConfig = configs.firebaseConfig;
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;