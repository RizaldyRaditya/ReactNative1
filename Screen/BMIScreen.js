import React, {Component} from "react";
import {View, StyleSheet} from "react-native"; //menambah style elemen
import {Text, Input, Button} from "react-native-elements"; // Load Komponen Text, Input dan Button
import TopHeader from "../Component/TopHeader";
const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "center"
    },
    input: {
        marginTop: 20
    },
    labelInput:{
        color:"pink"
    },
    result: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
        color: "black"
    }
});
class BMIScreen extends Component {
    constructor() {
        super();
        this.state = {
            m: '',
            h: '',
            bmi: '',
            ket: ''
        }
       
    }

    hitungBMI = () => {
        let m = Number(this.state.m); 
        let h = Number(this.state.h); 
        let b = m / (h*h);

        if (b < 18.5) {
            this.setState({ket: 'Kurus'});
        }
        else if (b > 18.5 && b < 22.9) {
            this.setState({ket: 'Ideal'});
        }
        else if (b > 22.9 && b < 24.9){
            this.setState({ket: 'OverWeight'});
        }
        else if (b > 24.9) {
            this.setState({ket: 'Obesitas'});
        }

        this.setState({bmi: b});
    }
    
        
    render() {
        return(
            <View>
                <TopHeader navigation={this.props.navigation} title="BMI" />
                <View style={styles.container}>
                    <Text h4> Body Mass Index </Text>
                    <Input 
                     label="Berat Badan Anda" labelStyle={styles.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({m: value}) }
                     value={this.state.m.toString()}
                      />
                    <Input 
                     label="Tinggi Badan Anda (dalam meter)" labelStyle={styles.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({h: value}) } value={this.state.h.toString()}
                      />
                      <Button containerStyle={styles.input} title="Hitung" 
                     onPress={this.hitungBMI} />
                     <Text style={styles.result}>BMI : {this.state.bmi} </Text>
                     <Text style={styles.result}>Keterangan : {this.state.ket} </Text>
                </View>
            </View>
        );
    }
}

export default BMIScreen;