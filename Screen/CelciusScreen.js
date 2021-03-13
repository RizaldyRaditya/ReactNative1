import React, { Component } from 'react';
import {View, Picker} from "react-native"; //menambah style elemen
import {Text, Input, Button} from "react-native-elements"; // Load Komponen Text,Input dan Button
import TopHeader from "../Component/TopHeader";

class CelciusScreen extends Component {
    constructor() {
        super();
        this.state = {
            option: "4",
            celcius: "",
            result: ""
        }
    }
    
    convertToReamur = () => {
        let celcius = Number(this.state.celcius);
        let hasil = celcius * 4/5;
        
        this.setState({result: hasil});
    }
    convertToFahrenheit = () => {
        let celcius = Number(this.state.celcius);
        let hasil = (celcius * 9/5) + 32;
        
        this.setState({result: hasil});
    }
    convertToKelvin = () => {
        let celcius = Number(this.state.celcius);
        let hasil = celcius+ 273;
        
        this.setState({result: hasil});
    }
    convert = () => {
        if (this.state.option === "4") {
            this.convertToReamur();
        }
        else if (this.state.option === "9") {
            this.convertToFahrenheit();
        }
        else if (this.state.option === "273") {
            this.convertToKelvin();
        }
    }

    render () {
        return(
            <View>
                <TopHeader navigation={this.props.navigation} title="Konversi Suhu" />
                  <View style={{padding:10}}>
                      <Text h4>Konversi Suhu</Text>
                      <Text h5>Opsi Konversi</Text>
                      <Picker
                        selectedValue={this.state.option} style={{width: 200, height: 80}}
                        onValueChange={(value) => this.setState({option: value})}
                      >
                        <Picker.Item label="Reamur" value="4" />
                        <Picker.Item label="Fahrenheit" value="9" />
                        <Picker.Item label="Kelvin" value="273" />
                      </Picker>

                      <Input label="Masukkan Nilai Suhu" value={this.state.celcius}
                      onChangeText={(value) => this.setState({celcius: value})} />

                      <Button title="Convert" onPress={this.convert} />
                      <Text h5>Hasil: {this.state.result} </Text>
                  </View>
            </View>
        );
    }
}
export default CelciusScreen;