import React, { Component } from "react";
import { Header, Icon } from "react-native-elements";

class TopHeader extends Component {
    render() {
        return(
            <Header 
                backgroundColor = "#a3ffee"
                leftComponent={
                    <Icon name="menu" color="#ff3b3b" onPress={ () => this.props.navigation.toggleDrawer()} />
                }
                centerComponent={
                    {
                    text: this.props.title,
                    style: {color: "#ff3b3b", fontWeight:"bold"}
                    }
                }
                statusBarProps={ {barStyle: "light-content"} }
            />
        );
    }
}
export default TopHeader;