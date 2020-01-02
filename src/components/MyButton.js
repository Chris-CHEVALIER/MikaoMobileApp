import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../constants/Colors';

export class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    return (
      <TouchableOpacity
        disabled={!this.props.exception && this.props.disabled}
        onPress={this.props.onClick}
        style={[this.props.style, this.props.disabled ? styles.disabled : styles.enabled, styles.button]}>
        <Text {...this.props} style={[ this.props.disabled ? styles.disabled : styles.enabled, styles.label]} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: wp("10%"),
    minHeight: hp("8%"),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: wp("4%"),
    marginBottom: wp("4%"),
    width: wp("65%"),
  },
  label: {
    textTransform: 'uppercase',
    fontSize: wp("7%"),
    fontFamily: "louis-george-cafe-bold",
    alignSelf: "center"
  },
  disabled: {
      backgroundColor: "lightgray",
  },
  enabled: {
      backgroundColor: Colors.mainColor,
      color: "white",
  },
});