import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class MyPickerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: props.values,
            selectedValue: props.selectedValue,
        };
    }

    changeValue(v) {
        this.setState({
            selectedValue: v,
        })
    }

    render() {
        const { values, selectedValue } = this.state;
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {values.length > 0 && (
                    <View>
                        {values && values.map(v => (
                            <View key={v} style={[v == selectedValue && styles.selectedBloc]}>
                                 <Text onPress={() => {this.changeValue(v)}} style={[v == selectedValue ? styles.selectedLabel : styles.label]}>{v}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        marginTop: hp("5%"),
        marginBottom: hp("5%"),
        height: hp("23%"),
        width: wp("50%"),
    },
    label: {
        marginBottom: wp("1.2%"),
        fontFamily: "louis-george-cafe",
        fontSize: wp("6%"),
        textAlign: "center",
    },
    selectedLabel: {
        fontFamily: "louis-george-cafe-bold",
        fontSize: wp("7.2%"),
        textAlign: "center",
        marginBottom: wp("1.2%"),
    },
    selectedBloc: {
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
    },
});