import React, {Component} from "react";
import {View, StyleSheet} from "react-native"; //menambah style elemen
import {Text, Input, Button} from "react-native-elements"; // Load Komponen Text, Input dan Button
import TopHeader from "../Component/TopHeader";

class KubusScreen extends Component {
    constructor() {
        super();
        this.state = {
            keliling: 0,
            luas: 0,
            volume: 0,
            s: 0

        }
    }
        hitungLuas = () => {
            let s = Number(this.state.s); //ambil dan konversi nilai s ke numeric
            let l = 6 * s * s;

            this.setState({luas: l});
        }
        hitungVolume = () => {
            let s = Number(this.state.s);
            let v = s * s * s;

            this.setState({volume : v});
        }
        hitungKeliling = () => {
            let s = Number(this.state.s);
            let k = 12 * s;

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
                color:"limegreen"
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
                <TopHeader navigation={this.props.navigation} title="Kubus" />
                <View style={styles.container}>
                    <Text h4> Bangun Ruang Kubus </Text>

                    <Input 
                     label="Nilai Sisi Kubus" labelStyle={styles.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({s: value}) }
                     value={this.state.s.toString()} />
                    <Button containerStyle={styles.input} title="Hitung" 
                     onPress={() => {this.hitungLuas(); this.hitungVolume(); this.hitungKeliling();}} />

                     <Text style={styles.result}>Keliling Kubus = {this.state.keliling} </Text>
                     <Text style={styles.result}>Luas Permukaan Kubus = {this.state.luas} </Text>
                     <Text style={styles.result}>Volume Kubus = {this.state.volume} </Text> 
                </View>
            </View>
        );
    }
}
export default KubusScreen;