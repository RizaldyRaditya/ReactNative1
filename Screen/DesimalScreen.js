import React, { Component } from 'react';
import {View, Picker, PickerItem} from "react-native"; //menambah style elemen
import {Text, Input, Button} from "react-native-elements"; // Load Komponen Text,Input dan Button
import TopHeader from "../Component/TopHeader";

class DesimalScreen extends Component {
    constructor() {
        super();
        this.state = {
            option: "2",
            desimal: "",
            result: ""
        }
    }
    convertToBiner = () => {
        let hasil = parseInt(this.state.desimal,10).toString(2);
        this.setState({result: hasil});
    }
    convertToOktal = () => {
        let hasil = parseInt(this.state.desimal,10).toString(8);
        this.setState({result: hasil});
    }
    convertToHexa = () => {
        let hasil = parseInt(this.state.desimal,10).toString(16).toUpperCase();
        this.setState({result: hasil});
    }
    convert = () => {
        if (this.state.option === "2") {
            this.convertToBiner();
        }
        else if (this.state.option === "8") {
            this.convertToOktal();
        }
        else if (this.state.option === "16") {
            this.convertToHexa();
        }
    }

    render () {
        return(
            <View>
                <TopHeader navigation={this.props.navigation} title="Konversi Desimal" />
                  <View style={{padding:10}}>
                      <Text h4>Konversi Bilangan Desimal</Text>
                      <Text h5>Opsi Konversi</Text>
                      <Picker
                        selectedValue={this.state.option} style={{width: 200, height: 80}}
                        onValueChange={(value) => this.setState({option: value})}
                      >
                        <Picker.Item label="Biner" value="2" />
                        <Picker.Item label="Oktal" value="8" />
                        <Picker.Item label="Hexa" value="16" />
                      </Picker>

                      <Input label="Masukkan Nilai Desimal" value={this.state.desimal}
                      onChangeText={(value) => this.setState({desimal: value})} />

                      <Button title="Convert" onPress={this.convert} />
                      <Text h5>Hasil: {this.state.result} </Text>
                  </View>
            </View>
        );
    }
}
export default DesimalScreen;