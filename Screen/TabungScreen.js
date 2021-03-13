import React, {Component} from "react";
import {View, StyleSheet} from "react-native"; //menambah style elemen
import {Text, Input, Button} from "react-native-elements"; // Load Komponen Text, Input dan Button
import TopHeader from "../Component/TopHeader";

class TabungScreen extends Component {
    constructor() {
        super();
        this.state = {
            luas: 0,
            volume: 0,
            r: 0,
            t: 0
        }
    }
        hitungLuas = () => {
            let r = Number(this.state.r); // ambil dan konversi nilai r ke numeric
            let t = Number(this.state.t); //ambil dan konversi nilai t ke numeric
            let l = (2 * 3.14 * r * r) + (2 * 3.14 * r * t);

            this.setState({luas: l});
        }
        hitungVolume = () => {
            let r = Number(this.state.r);
            let t = Number(this.state.t);
            let v = 3.14 * r * r * t;

            this.setState({volume : v});
        }

    render () {
        const styles = StyleSheet.create({
            container: {
                padding: 20,
                justifyContent: "center"
            },
            input: {
                marginTop: 20
            },
            labelInput:{
                color:"grey"
            },
            result: {
                fontSize: 25,
                fontWeight: "bold",
                marginTop: 10,
                color: "black"
            },
            buttonStyles: {
                backgroundColor:'#00BCD4',
                borderRadius:10,
                borderWidth: 1,
                borderColor: '#fff'
            }
        });
        return( 
            <View>
                <TopHeader navigation={this.props.navigation} title="Tabung" />
                <View style={styles.container}>
                    <Text h4> Bangun Ruang Tabung </Text>

                    <Input 
                     label="Nilai Jari-Jari Tabung" labelStyle={styles.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({r: value}) }
                     value={this.state.r.toString()} />
                    <Input  
                     label="Nilai Tinggi Tabung" labelStyle={styles.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({t: value}) }
                     value={this.state.t.toString()} />
                    <Button containerStyle={styles.input} style={styles.buttonStyles} title="Hitung" 
                     onPress={() => {this.hitungLuas(); this.hitungVolume();}} />

                     <Text style={styles.result}>Luas Permukaan Tabung = {this.state.luas} </Text>
                     <Text style={styles.result}>Volume Tabung = {this.state.volume} </Text> 
                </View>
            </View>
        )
    }
}
export default TabungScreen;