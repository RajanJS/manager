import cssV from './variables/cssV';

import header from './components/header';
import card from './components/card';
import textInput from './components/textInput';
import spinner from './components/spinner';

/**
 * Returns app styles
 * @returns {{app styles object}}
 */
const styles = () => {
    const mainStyles = {
        mainContainerStyle: {
            flex: 1
        },
        errorTextStyle: {
            fontSize: 20,
            alignSelf: 'center',
            color: 'red'
        },
        pickerTextStyle:{
            fontSize:18,
            paddingLeft:20
        }
    };

    const AppStyles = Object.assign(
        {},
        header(),
        card(),
        textInput(),
        spinner(),
        mainStyles
    );

    return AppStyles;
};

export default styles;
