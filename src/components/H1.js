import React from 'react';
import { Text } from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export function H1(props) {
  return (
    <Text {...props} style={[props.style, { fontSize: wp("15%"), fontFamily: "louis-george-cafe-bold"}]} />
  );
}
