import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../constants/Colors';

export class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
    //this.moveAnimation = new Animated.ValueXY({ x: 0, y: 0 })
  }

  /*moveLabelType = () => {
    Animated.spring(this.moveAnimation, {
      toValue: {x: 10, y: 10},
    }).start()
  }*/

  render() {
    return (
      <TouchableOpacity
        disabled={!this.props.exception && this.props.disabled}
        onPress={() => {}}
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
      backgroundColor: "white",
  },
  enabled: {
      backgroundColor: Colors.mainColor,
      color: "white",
  },
});

/*
<Animated.View style={[ this.moveAnimation.getLayout()]}>
        <TouchableWithoutFeedback
              disabled={!this.props.exception && this.props.disabled}
              onPress={() => {this.props.exception && this.moveLabelType}} style={[this.props.style, this.props.disabled ? styles.disabled : styles.enabled, styles.button]}>
            <Text {...this.props} style={[ this.props.disabled ? styles.disabled : styles.enabled, styles.label]} />
        </TouchableWithoutFeedback>
      </Animated.View>
*/