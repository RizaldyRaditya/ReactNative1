import React, { Component } from "react";
import {View, Text} from "react-native";
import TopHeader from "../Component/TopHeader";

class BerandaScreen extends Component {
    render() {
        return(
            <View>
                <TopHeader navigation={this.props.navigation} title="Beranda" />
                <Text>Beranda</Text>
            </View>
        );
    }
}
export default BerandaScreen;