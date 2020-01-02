import React from 'react';
import { Text } from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export function H3(props) {
  return (
    <Text {...props} style={[props.style, { textTransform: 'capitalize', fontSize: wp("7%"), fontFamily: "louis-george-cafe-bold"}]} />
  );
}
