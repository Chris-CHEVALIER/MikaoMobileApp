import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from '../constants/Colors';
import { MyButton } from "../components/MyButton";
import { H1 } from "../components/H1";
import { H3 } from "../components/H3";
import { TextBloc } from "../components/TextBloc"

import SymptomStore from "../stores/SymptomStore";
import TreatmentStore from "../stores/TreatmentStore";
import ViewComponentBase from "./ViewComponentBase";

export default class DescriptionScreen extends ViewComponentBase {
    _pendingLoading;
    constructor(props) {
        super(props);
        const symptoms = SymptomStore.getSymptoms();
        this.state = {
            selectedValue: this.props.navigation.getParam("selectedValue"),
            typeValue: this.props.navigation.getParam("typeValue"),
            symptoms,
        };
    }

    componentDidMount() {
        this.addListener(SymptomStore, this.receiveSymptoms);
    }

    componentWillUnmount() {
        this.removeListeners();
    }

    receiveSymptoms = () => {
        const symptoms = SymptomStore.getSymptoms();
        this.setState({
                symptoms
        });
    };

    render() {
        const navigation = this.props.navigation;
        const { selectedValue, symptoms, typeValue } = this.state;

        mySymptoms = [];
        symptoms.map(symptom => {
            symptom.treatments.map(treatmentId => {
                if(treatmentId == selectedValue.id) mySymptoms.push(SymptomStore.getById(symptom.id));
            })
        })
        
        return (
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={styles.titleContainer}>
                        <H1 style={styles.titleLabel}>MIKAO</H1>
                        <LinearGradient
                            colors={[Colors.mainColor, "white"]}
                            start={[0, 1]}
                            end={[1, 0]}
                            style={styles.titleLine}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.selectByBloc}>
                    <Text style={styles.selectByLabel}>{selectedValue.name}</Text>
                </View>
                <View style={styles.descriptionBloc}>
                    <H3>{selectedValue.treatments ? "Soins" : "Symptômes"}</H3>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                    
                        { typeValue === "Symptôme" && selectedValue.treatments.length > 0 ? ( selectedValue.treatments.map(treatmentId => {
                            treatment = TreatmentStore.getById(treatmentId);
                            return <TouchableOpacity key={treatmentId} onPress={() => this.setState({selectedValue: treatment, typeValue: "Soins"}) }><Text style={styles.selectByLabel}>{treatment.name}</Text></TouchableOpacity>
                        })) : (
                            typeValue === "Soins" && mySymptoms.length > 0 ? mySymptoms.map(symptom => {
                                return <TouchableOpacity key={symptom.id} onPress={() => this.setState({selectedValue: symptom, typeValue: "Symptôme"}) }><Text style={styles.selectByLabel}>{symptom.name}</Text></TouchableOpacity>
                            }) : (
                                <Text style={styles.selectByLabel}>Aucune donnée.</Text>
                            )
                        )}
                        
                        
                    </View>
                    { selectedValue.treatments && selectedValue.treatments.length <= 0 && <Text style={styles.selectByLabel}>Aucune donnée.</Text>}
                </View>
                <View style={styles.descriptionBloc}>
                    <H3>Description</H3>
                    <TextBloc style={styles.selectByLabel}>{selectedValue.description}</TextBloc>
                </View>
                <MyButton disabled={false} onClick={() => navigation.navigate("Home")}>OK</MyButton>
            </ScrollView>
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
        marginTop: wp("5%"),
        marginLeft: wp("3%"),
        marginRight: wp("3%"),
        color: Colors.labelColor,
        fontFamily: "louis-george-cafe",
    },
    descriptionBloc: {
        margin: wp("8%"),
    },
});

DescriptionScreen.navigationOptions = {
    header: null
};