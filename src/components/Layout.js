import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../constants/Colors';
import { LinearGradient } from "expo-linear-gradient";
import { H1 } from "../components/H1";

export class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    
    return (
        <LinearGradient
            colors={["transparent", "white"]}
            style={styles.gradientBackground}
        >
            <TouchableHighlight onPress={() => navigate("Home")}>
                <View style={styles.titleContainer}>
                    <H1 style={styles.titleLabel} >MIKAO</H1>
                    <LinearGradient
                        colors={[Colors.mainColor, "white"]}
                        start={[0, 1]}
                        end={[1, 0]}
                        style={styles.titleLine}
                    />
                </View>
            </TouchableHighlight>
        </LinearGradient>
    )}
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: wp("18%"),
    },
    titleLabel: {
        marginLeft: wp("8%"),
        zIndex: 1
    },
    titleLine: {
        position: "absolute",
        top: hp("7.5%"),
        width: wp("75%"),
        minHeight: hp("2%")
    },
    gradientBackground: {
        width: wp("100%"),
        height: hp("100%"),
    }
});