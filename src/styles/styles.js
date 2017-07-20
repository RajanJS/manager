import cssV from './variables/cssV';

import header from './components/header';
import card from './components/card';
import textInput from './components/textInput';

/**
 * Returns app styles
 * @returns {{app styles object}}
 */
const styles = () => {
    const mainStyles = {
        mainContainerStyle: {
            flex: 1
        }
    };

    const AppStyles = Object.assign(
        {},
        header(),
        card(),
        textInput(),
        mainStyles
    );

    return AppStyles;
};

export default styles;
