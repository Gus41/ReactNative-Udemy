import React, { useState }  from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "../../styles";


export default class Mega extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            nums : this.props.nums 
        }
    }
    setNums(n){
        this.setState({nums : n})
    }

    render(){
        return(
            <View>
                <Text style={styles.sectionTitle}>Gerador de Numeros aleatorios {this.state.nums}</Text>
                <TextInput
                placeholder="Quantidade de numeros"
                value={this.state.nums}
                onChangeText={(txt)=>{
                    this.setNums(Number(txt))
                }}
                />
            </View>
        )
    }
}
