import React from "react";
import {
    StyleSheet,
    View,
} from "react-native";

import { MenuIcon } from "../components/MenuIcon";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <MenuIcon
                    onClick={() => navigate("Treatment")}
                    title="Soin"
                    image="../assets/images/heartbeat.png"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        top: 0, left: 0, 
        right: 0, bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    menuIcon: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

HomeScreen.navigationOptions = {
    header: null
};