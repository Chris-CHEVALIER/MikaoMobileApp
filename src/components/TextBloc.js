import React from 'react';
import { Text } from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export function TextBloc(props) {
  return (
    <Text {...props} style={[props.style, { textAlign: 'justify', fontSize: wp("5.5%"), fontFamily: "louis-george-cafe"}]} />
  );
}
