import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from '../constants/Colors';
import { MyButton } from "../components/MyButton";
import { HorizontalPickerView } from "../components/HorizontalPickerView";
import { MyPickerView } from "../components/MyPickerView";
import { H1 } from "../components/H1";

import SymptomStore from "../stores/SymptomStore";
import SymptomActions from "../actions/SymptomActions";
import TreatmentStore from "../stores/TreatmentStore";
import TreatmentActions from "../actions/TreatmentActions";
import ViewComponentBase from "./ViewComponentBase";

export default class TreatmentScreen extends ViewComponentBase {
    _pendingLoading;
    constructor(props) {
        super(props);
        const symptoms = SymptomStore.getSymptoms();
        const treatments = TreatmentStore.getTreatments();
        this.state = {
            loading: true,
            selectedValue: null,
            typeValue: "Symptôme",
            symptoms,
            treatments,
        };
    }

    componentDidMount() {
        this.addListener(SymptomStore, this.receiveSymptoms);
        this.addListener(TreatmentStore, this.receiveTreatments);
        this._pendingLoading = 2;
        SymptomActions.reload().then(this.checkLoading);
        TreatmentActions.reload().then(this.checkLoading);
    }

    componentWillUnmount() {
        this.removeListeners();
    }

    receiveSymptoms = () => {
        const symptoms = SymptomStore.getSymptoms();
        this.setState({
                symptoms
            },
            this.checkLoading
        );
    };

    receiveTreatments = () => {
        const treatments =  TreatmentStore.getTreatments();
        this.setState({
                treatments
            },
            this.checkLoading
        );
    };

    checkLoading = () => {
        this._pendingLoading--;
        if (this._pendingLoading <= 0) {
            this.setState({
                loading: false
            });
        }
    };

    handleChange = (type) => {
        this.setState({
            typeValue: type,
            selectedValue: null,
        })
    }

    onChange = (v) => {
        this.setState({
            selectedValue: v
        })
    }

    render() {
        const navigation = this.props.navigation;
        const { selectedValue, symptoms, treatments, loading, typeValue } = this.state;
        if (loading) return <ActivityIndicator color={Colors.mainColor} />;
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={styles.titleContainer}>
                        <H1 style={styles.titleLabel} >MIKAO</H1>
                        <LinearGradient
                            colors={[Colors.mainColor, "white"]}
                            start={[0, 1]}
                            end={[1, 0]}
                            style={styles.titleLine}
                        />
                    </View>
                </TouchableOpacity>
                    <View style={styles.selectByBloc}>
                        <Text style={styles.selectByLabel}>Sélectionner par</Text>
                    </View>
                    
                    <HorizontalPickerView typeValue={typeValue} onChange={this.handleChange} />
                    <MyPickerView selectedValue={selectedValue} values={typeValue == "Symptôme" ? symptoms :  treatments } onChange={this.onChange}/>
                <MyButton disabled={selectedValue ? false : true} onClick={() => navigation.navigate("Description", {selectedValue: selectedValue, typeValue: typeValue})}>OK</MyButton>
            </View>
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
        marginTop: wp("12%"),
        marginLeft: wp("8%")
    },
    selectByLabel: {
        fontSize: wp("6%"),
        color: Colors.labelColor,
        fontFamily: "louis-george-cafe",
    },
});

TreatmentScreen.navigationOptions = {
    header: null
};