import React from "react";

import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { H1 } from "../components/H1";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { MyButton } from "../components/MyButton";
import Colors from '../constants/Colors';
import { HorizontalPickerView } from "../components/HorizontalPickerView";
import { MyPickerView } from "../components/MyPickerView";

var values = [ "Stress", "Rhume", "Dépression", "Tensions", "Test3", "Test1", "Test2", "Test4", "Test5", "Test6" ];
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: "Dépression",
        };
    }

    render() {
        const { currentValue } = this.state;
        return (
            <LinearGradient
                colors={[Colors.mainColor, Colors.gradientColor]}
                style={styles.gradientBackground}
            >
                <View>
                    <View style={styles.titleContainer}>
                        <H1 style={styles.titleLabel}>MIKAO</H1>
                        <LinearGradient
                            colors={["transparent", "white"]}
                            start={[0, 1]}
                            end={[1, 0]}
                            style={styles.titleLine}
                        />
                    </View>
                    <View style={styles.selectByBloc}>
                        <Text style={styles.selectByLabel}>Sélectionner par</Text>
                    </View>
                    <HorizontalPickerView />
                    <MyPickerView selectedValue={currentValue} values={values}/>
                </View>
                <MyButton disabled={true}>OK</MyButton>
            </LinearGradient>
        );
    }
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
    selectByBloc: {
        marginTop: wp("25%"),
        marginLeft: wp("8%")
    },
    selectByLabel: {
        fontSize: wp("6%"),
        color: Colors.labelColor,
        fontFamily: "louis-george-cafe",
    },
    gradientBackground: {
        width: wp("100%"),
        height: hp("100%"),
    }
});

HomeScreen.navigationOptions = {
    header: null
};