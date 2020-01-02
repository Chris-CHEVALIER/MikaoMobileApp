import React from 'react';
import { Text } from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export function H2(props) {
  return (
    <Text {...props} style={[props.style, { textTransform: 'uppercase', fontSize: wp("8%"), fontFamily: "louis-george-cafe-bold"}]} />
  );
}
