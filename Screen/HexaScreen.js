import React, { Component } from 'react';
import {View, Picker, PickerItem} from "react-native"; //menambah style elemen
import {Text, Input, Button} from "react-native-elements"; // Load Komponen Text,Input dan Button
import TopHeader from "../Component/TopHeader";

class HexaScreen extends Component {
    constructor() {
        super();
        this.state = {
            option: "10",
            hexa: "",
            result: ""
        }
    }
    
    convertToDesimal = () => {
        let hasil = parseInt(this.state.hexa,16).toString(10);
        this.setState({result: hasil});
    }
    convertToBiner = () => {
        let hasil = parseInt(this.state.hexa,16).toString(2);
        this.setState({result: hasil});
    }
    convertToOktal = () => {
        let hasil = parseInt(this.state.hexa,16).toString(8);
        this.setState({result: hasil});
    }
    convert = () => {
        if (this.state.option === "10") {
            this.convertToDesimal();
        }
        else if (this.state.option === "2") {
            this.convertToBiner();
        }
        else if (this.state.option === "8") {
            this.convertToOktal();
        }
    }

    render () {
        return(
            <View>
                <TopHeader navigation={this.props.navigation} title="Konversi Hexa" />
                  <View style={{padding:10}}>
                      <Text h4>Konversi Bilangan Hexa</Text>
                      <Text h5>Opsi Konversi</Text>
                      <Picker
                        selectedValue={this.state.option} style={{width: 200, height: 80}}
                        onValueChange={(value) => this.setState({option: value})}
                      >
                        <Picker.Item label="Desimal" value="10" />
                        <Picker.Item label="Biner" value="2" />
                        <Picker.Item label="Oktal" value="8" />
                      </Picker>

                      <Input label="Masukkan Nilai Hexa" value={this.state.hexa}
                      onChangeText={(value) => this.setState({hexa: value})} />

                      <Button title="Convert" onPress={this.convert} />
                      <Text h5>Hasil: {this.state.result} </Text>
                  </View>
            </View>
        );
    }
}
export default HexaScreen;