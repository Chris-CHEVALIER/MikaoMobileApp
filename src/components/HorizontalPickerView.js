import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { MyButton } from "../components/MyButton";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

var deviceWidth = Dimensions.get('window').width;

export class HorizontalPickerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.typeValue
        };
    }

    onChange(position) {
        let type = "Symptôme"
        if(position <= 180) {
            this.setState({
                type
            });
        } else if(position > 180) {
            type = "Soins"
            this.setState({
                type
            });
        }
        this.props.onChange(type);
    }

    render() {
        const {type} = this.state;
        return (
            <View style={styles.container}>
                <ScrollView onScroll={event => this.onChange(event.nativeEvent.contentOffset.x)} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.buttonBloc}>
                        <MyButton exception disabled={true}>Symptôme</MyButton>
                    </View>
                    <View style={styles.buttonBloc}>
                        <MyButton exception disabled={true}>Soins</MyButton>
                    </View>
                </ScrollView>
                <View style={{flexDirection: "row"}}>
                    <View style={[type === "Symptôme" ? styles.currentPagination : styles.nonCurrentPagination, styles.pagination]}/>
                    <View style={[type === "Soins" ? styles.currentPagination : styles.nonCurrentPagination, styles.pagination]}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBloc: {
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    pagination: {
        borderRadius: wp("100%"),
        borderWidth: wp("1%"),
        marginRight:wp("2.5%"),
    },
    currentPagination: {
        borderColor: "black",
    },
    nonCurrentPagination: {
        borderColor: "lightgray",
    },
});