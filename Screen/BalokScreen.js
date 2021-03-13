import React, {Component} from "react";
import {View, StyleSheet} from "react-native"; //menambah style elemen
import {Text, Input, Button} from "react-native-elements"; // Load Komponen Text, Input dan Button
import TopHeader from "../Component/TopHeader";

class BalokScreen extends Component {
    constructor() {
        super();
        this.state = {
            keliling: 0,
            luas: 0,
            volume: 0,
            p: 0,
            l: 0,
            t: 0

        }
    }
        hitungLuas = () => {
            let p = Number(this.state.p); //ambil dan konversi nilai p ke numeric
            let l = Number(this.state.l); //ambil dan konversi nilai l ke numeric
            let t = Number(this.state.t); //ambil dan konversi nilai t ke numeric
            let lu = 2 * (p * l + p * t + l * t);

            this.setState({luas: lu});
        }
        hitungVolume = () => {
            let p = Number(this.state.p);
            let l = Number(this.state.l);
            let t = Number(this.state.t);
            let v = p * l * t;

            this.setState({volume : v});
        }
        hitungKeliling = () => {
            let p = Number(this.state.p);
            let l = Number(this.state.l);
            let t = Number(this.state.t);
            let k = 4 * (p + l + t);

            this.setState({keliling : k});
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
                color:"orange"
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
                <TopHeader navigation={this.props.navigation} title="Balok" />
                <View style={styles.container}>
                    <Text h4> Bangun Ruang Balok </Text>

                    <Input 
                     label="Nilai Panjang Balok" labelStyle={styles.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({p: value}) }
                     value={this.state.p.toString()} />
                     <Input 
                     label="Nilai Lebar Balok" labelStyle={styles.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({l: value}) }
                     value={this.state.l.toString()} />
                     <Input 
                     label="Nilai Tinggi Balok" labelStyle={styles0000000.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({t: value}) }
                     value={this.state.t.toString()} />
                    <Button containerStyle={styles.input} title="Hitung" 
                     onPress={() => {this.hitungLuas(); this.hitungVolume(); this.hitungKeliling();}} />

                     <Text style={styles.result}>Keliling Balok = {this.state.keliling} </Text>
                     <Text style={styles.result}>Luas Permukaan Balok = {this.state.luas} </Text>
                     <Text style={styles.result}>Volume Balok = {this.state.volume} </Text> 
                </View>
            </View>
        );
    }
}
export default BalokScreen;