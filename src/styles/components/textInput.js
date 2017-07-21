/**
 * Created by rajanmaharjan on 7/20/17.
 */

import cssV from '../variables/cssV';

const containerHeight = 20;
const containerWidth = 100;

export default function () {
    return {
        inputStyle: {
            height: containerHeight,
            width: containerWidth,
            color: cssV('lightBlack'),
            paddingRight: 5,
            paddingLeft: 5,
            fontSize: 18,
            lineHeight: 23,
            flex: 2
        },
        labelStyle: {
            fontSize: 18,
            paddingLeft: 20,
            flex: 1
        },
        containerStyle: {
            height: 40,
            flex: 1,
            flexDirection: 'row',
            alignItems:'center'
        }
    };
}
