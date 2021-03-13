import React, { Component } from 'react';
import {View, Picker, PickerItem} from "react-native"; //menambah style elemen
import {Text, Input, Button} from "react-native-elements"; // Load Komponen Text,Input dan Button
import TopHeader from "../Component/TopHeader";

class OktalScreen extends Component {
    constructor() {
        super();
        this.state = {
            option: "10",
            oktal: "",
            result: ""
        }
    }
    
    convertToDesimal = () => {
        let hasil = parseInt(this.state.oktal,8).toString(10);
        this.setState({result: hasil});
    }
    convertToBiner = () => {
        let hasil = parseInt(this.state.oktal,8).toString(2);
        this.setState({result: hasil});
    }
    convertToHexa = () => {
        let hasil = parseInt(this.state.oktal,8).toString(16).toUpperCase();
        this.setState({result: hasil});
    }
    convert = () => {
        if (this.state.option === "10") {
            this.convertToDesimal();
        }
        else if (this.state.option === "2") {
            this.convertToBiner();
        }
        else if (this.state.option === "16") {
            this.convertToHexa();
        }
    }

    render () {
        return(
            <View>
                <TopHeader navigation={this.props.navigation} title="Konversi Oktal" />
                  <View style={{padding:10}}>
                      <Text h4>Konversi Bilangan Oktal</Text>
                      <Text h5>Opsi Konversi</Text>
                      <Picker
                        selectedValue={this.state.option} style={{width: 200, height: 80}}
                        onValueChange={(value) => this.setState({option: value})}
                      >
                        <Picker.Item label="Desimal" value="10" />
                        <Picker.Item label="Biner" value="2" />
                        <Picker.Item label="Hexa" value="16" />
                      </Picker>

                      <Input label="Masukkan Nilai Oktal" value={this.state.oktal}
                      onChangeText={(value) => this.setState({oktal: value})} />

                      <Button title="Convert" onPress={this.convert} />
                      <Text h5>Hasil: {this.state.result} </Text>
                  </View>
            </View>
        );
    }
}
export default OktalScreen;