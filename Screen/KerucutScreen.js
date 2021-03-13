import React, {Component} from "react";
import {View, StyleSheet} from "react-native"; //menambah style elemen
import {Text, Input, Button} from "react-native-elements"; // Load Komponen Text, Input dan Button
import TopHeader from "../Component/TopHeader";

class KerucutScreen extends Component {
    constructor() {
        super();
        this.state = {
            luas: 0,
            volume: 0,
            r: 0,
            t: 0,
            s: 0
        }
    }
        hitungLuas = () => {
            let r = Number(this.state.r); // ambil dan konversi nilai r ke numeric
            let s = Number(this.state.s); //ambil dan konversi nilai s ke numeric
            let l = (3.14 * r * r) + (3.14 * r * s);

            this.setState({luas: l});
        }
        hitungVolume = () => {
            let r = Number(this.state.r);
            let t = Number(this.state.t);
            let v = 1/3 * 3.14 * r * r * t;

            this.setState({volume : v});
        }
    render() {
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
        return(
            <View>
                <TopHeader navigation={this.props.navigation} title="Kerucut" />
                <View style={styles.container}>
                    <Text h4> Bangun Ruang Kerucut </Text>

                    <Input 
                     label="Nilai Jari-Jari Kerucut" labelStyle={styles.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({r: value}) }
                     value={this.state.r.toString()} />
                     <Input 
                     label="Nilai Garis Pelukis Kerucut" labelStyle={styles.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({s: value}) }
                     value={this.state.s.toString()} />
                    <Input  
                     label="Nilai Tinggi Kerucut" labelStyle={styles.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({t: value}) }
                     value={this.state.t.toString()} />
                    <Button containerStyle={styles.input} title="Hitung" 
                     onPress={() => {this.hitungLuas(); this.hitungVolume();}} />

                     <Text style={styles.result}>Luas Permukaan Kerucut = {this.state.luas} </Text>
                     <Text style={styles.result}>Volume Kerucut = {this.state.volume} </Text> 
                </View>
            </View>
        );
    }
}
export default KerucutScreen;