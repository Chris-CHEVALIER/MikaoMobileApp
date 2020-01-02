import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image, TouchableOpacity, StyleSheet, View } from "react-native";
import Colors from '../constants/Colors';
import { H2 } from "../components/H2";

export function MenuIcon(props) {
  return (
    <View>
    <TouchableOpacity onPress={props.onClick} style={[props.style, styles.container ]} >
      <Image
        style={styles.icon}
        source={ require("../assets/images/heartbeat.png") }
      />
     
    </TouchableOpacity>
    <H2 style={{textAlign: 'center'}}>{props.title}</H2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',  
    flexDirection: 'column',
    width: wp('30%'),
    height: hp('15%'),
    borderRadius: wp('30%')/2,
  },
  icon: {
    maxWidth: wp("22%"),
    maxHeight: hp("12%"),
    marginTop: hp("1%")
  },
});