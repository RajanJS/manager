/**
 * Created by rajanmaharjan on 7/22/17.
 */
import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop: 65}}>
            <Scene key="auth">
                <Scene
                    key="login"
                    component={LoginForm}
                    // hideNavBar={true}
                    title="Please Login"
                />
            </Scene>
            <Scene key="main">
                <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    // initial
                    // showLabel="false"
                    // back="false"
                />
                <Scene
                    // onRight={() => console.log('right')}
                    // rightTitle="Add"
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee"
                    // showLabel="false"
                    // back="false"
                />
                <Scene
                    // onRight={() => console.log('right')}
                    // rightTitle="Add"
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Edit Employee"
                    // showLabel="false"
                    // back="false"
                />
            </Scene>

        </Router>
    );
};

export default RouterComponent;