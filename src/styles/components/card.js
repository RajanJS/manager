/**
 * Created by rajanmaharjan on 7/11/17.
 */

import cssV from '../variables/cssV';

export default function () {
    return {
        cardContainerStyle: {
            borderWidth: 1,
            borderRadius: 2,
            borderColor: cssV('lightWhite'),
            borderBottomWidth: 0,
            shadowColor: cssV('lightBlack'),
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.1,
            elevation: 1,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10
        },
        cardSectionContainer: {
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: cssV('white'),
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderColor: cssV('lightWhite'),
            position: 'relative'
        },
        cardSectionTitle: {
            fontSize: 18,
            paddingLeft: 15
        },
        cardHeaderTextContainer: {
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        cardHeaderTextStyle: {
            fontSize: 18
        },
        cardHeaderThumbnailContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
            marginLeft: 10
        },
        cardHeaderThumbnailStyle: {
            height: 50,
            width: 50
        },
        cardBodyImageStyle: {
            height: 300,
            flex: 1,
            width: null
        },
        cardButtonStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: cssV('white'),
            borderRadius: 5,
            borderWidth: 1,
            borderColor: cssV('blue'),
            marginLeft: 5,
            marginRight: 5
        },
        cardButtonText: {
            alignSelf: 'center',
            color: cssV('blue'),
            fontSize: 16,
            fontWeight: '600',
            paddingTop: 10,
            paddingBottom: 10
        }
    };
}
