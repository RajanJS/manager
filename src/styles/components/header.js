/**
 * Created by rajanmaharjan on 7/10/17.
 */

import cssV from '../variables/cssV';

const fontSiz = 20;
const containerHeight = 60;
const containerPadding = 7;
const containerBg = cssV('lightGray');
const contShadowColor = cssV('lightBlack');
const contShadowOffset = {width: 0, height: 2};
const contShadowOpacity = 0.2;

export default function () {
    return {
        headerContainer: {
            backgroundColor: containerBg,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: containerHeight,
            padding: containerPadding,
            shadowColor: contShadowColor,
            shadowOffset: contShadowOffset,
            shadowOpacity: contShadowOpacity,
            elevation: 2,
            position: 'relative'
        },
        headerText: {
            fontSize: fontSiz
        }
    };
}
