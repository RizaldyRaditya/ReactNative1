import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem, Button, Input, Overlay, Text, Card } from 'react-native-elements';
import axios from 'axios';
import TopHeader from '../Component/TopHeader';

const url =  "http://192.168.43.220/pelanggaran_sekolah/public";

class SiswaScreen extends Component {
    constructor() {
        super();
        this.state = {
            siswa: [],
            form_visible : false,
            action: "",
            id_siswa: "",
            nis: "",
            nama_siswa: "",
            kelas: "",
            poin: "0"
        }
    }

    get_siswa = () => {
        axios.get(url + "/siswa")
        .then(response => {
            this.setState({siswa: response.data.siswa});
        })
        .catch(error => {
            alert(error);
        })
    }

    AddSiswa = () => {
        this.setState({
            form_visible: true, //memunculkan form
            action: "insert",
            id_siswa: "IDS" + Math.floor(Math.random() * 1000),
            nis: "",
            nama_siswa: "",
            kelas: "",
            poin: ""
        });
    }

    EditSiswa = (item) => {
        this.setState({
            form_visible: true,
            action: "update",
            id_siswa: item.id_siswa,
            nis: item.nis,
            nama_siswa: item.nama_siswa,
            kelas: item.kelas,
            poin:  item.poin.toString()
        })
    }

    Save = () => {
        this.setState({form_visible: false});
        let form = new FormData();
        form.append("action", this.state.action);
        form.append("id_siswa", this.state.id_siswa);
        form.append("nis", this.state.nis);
        form.append("nama_siswa", this.state.nama_siswa);
        form.append("kelas", this.state.kelas);
        form.append("poin", this.state.poin);

        axios.post(url + "/siswa/save", form)
        .then(response => {
            alert(response.data.message);
            this.get_siswa();
        })
        .catch(error => {
            console.log(error);
        })
    }

    Drop = (id) => {
        axios.delete(url + "/siswa/drop/" + id)
        .then(response => {
            alert(response.data.message);
            this.get_siswa();
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.subs = this.props.navigation.addListener("didFocus", () => {
            this.get_siswa();
        })
    }

    componentWillUnmount() {
        this.subs.remove();
    }

    render(){
        return(
            <View>
                <TopHeader navigation={this.props.navigation} title="Data Siswa" />
                <Card containerStyle={{margin: 2, height: "90%"}} title="Daftar Siswa">
                    <ScrollView style={{padding: 10, height: "80%"}}>
                        {
                            this.state.siswa.map((item,index) => (
                                <ListItem key={index} title={<Text style={{color: "limegreen", fontSize: 20, fontWeight: "bold"}}>
                                    {item.nama_siswa}
                                </Text>
                                }
                                subtitle={
                                    <View>
                                        <Text>
                                            Berasal dari kelas {item.kelas} dengan NIS {item.nis}.
                                            Saat ini {item.nama_siswa} mempunyai {item.poin} poin.
                                        </Text>
                                        <View style={{flexDirection: "row"}}>
                                            <Button containerStyle={{margin: 5}} title="Edit" onPress={() => this.EditSiswa(item)} />
                                            <Button containerStyle={{margin: 5, height: 7}} buttonStyle={{backgroundColor: "red"}}
                                            title="Hapus" onPress={() => this.Drop(item.id_siswa)} />
                                        </View>
                                    </View>
                                }
                                bottomDivider />
                            ))
                        }
                    </ScrollView>
                    <Button buttonStyle={{backgroundColor: "green"}} title="Tambah Siswa" onPress={this.AddSiswa} type="solid"
                    containerStyle={{marginBottom: 20}} />
                </Card>
                <Overlay isVisible={this.state.form_visible} onBackdropPress={() => this.setState({form_visible: false})}>
                    <ScrollView>
                        <Input containerStyle={{margin: 2}}
                        label="NIS" value={this.state.nis} onChangeText={(value) => this.setState({nis: value})} />
                        <Input containerStyle={{margin: 2}}
                        label="NAMA" value={this.state.nama_siswa} onChangeText={(value) => this.setState({nama_siswa: value})} />
                        <Input containerStyle={{margin: 2}}
                        label="KELAS" value={this.state.kelas} onChangeText={(value) => this.setState({kelas: value})} />
                        <Input containerStyle={{margin: 2}}
                        label="POIN" value={this.state.poin} onChangeText={(value) => this.setState({poin: value})} keyboardType="numeric" />\
                        <Button title="Simpan" type="solid" onPress={this.Save} buttonStyle={{backgroundColor:"cyan"}} />
                    </ScrollView>
                </Overlay>
            </View>
        )
    }

}
export default SiswaScreen;