import React, {Component} from "react";
import {View, StyleSheet} from "react-native"; //menambah style elemen
import {Text, Input, Button} from "react-native-elements"; // Load Komponen Text, Input dan Button
import TopHeader from "../Component/TopHeader";

class BolaScreen extends Component {
    constructor() {
        super();
        this.state = {
            luas: 0,
            volume: 0,
            r: 0
        }
    }
        hitungLuas = () => {
            let r = Number(this.state.r); // ambil dan konversi nilai r ke numeric
            let l = 4 * 3.14 * r * r;

            this.setState({luas: l});
        }
        hitungVolume = () => {
            let r = Number(this.state.r);
            let v = 4/3 * 3.14 * r * r * r;

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
                color:"yellow"
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
                <TopHeader navigation={this.props.navigation} title="Bola" />
                <View style={styles.container}>
                    <Text h4> Bangun Ruang Bola </Text>

                    <Input 
                     label="Nilai Jari-Jari Tabung" labelStyle={styles.labelInput} keyboardType="numeric"
                     containerStyle={styles.input} onChangeText={(value) => this.setState({r: value}) }
                     value={this.state.r.toString()} />
                    <Button containerStyle={styles.input} title="Hitung" 
                     onPress={() => {this.hitungLuas(); this.hitungVolume();}} />

                     <Text style={styles.result}>Luas Permukaan Bola = {this.state.luas} </Text>
                     <Text style={styles.result}>Volume Bola = {this.state.volume} </Text> 
                </View>
            </View>
        )
    }
}
export default BolaScreen;