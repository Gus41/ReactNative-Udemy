import React, { useState }  from "react";
import { Alert, Button, FlatList, Text, TextInput, View } from "react-native";
import styles from "../../styles";


export default class Mega extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        qntd : this.props.qntd,
        randomNums: []
    }
    setQntd(n){
        this.setState({qntd : n})
    }
    gerarNumNaoContido = (nums)=>{
        console.log('...')
        const novo = parseInt(Math.random() * 60 ) + 1
        return nums.includes(novo) ? this.gerarNumNaoContido(nums) : novo
        
    }
    gerarNumeros = ()=>{
       
        const numeros = Array(this.state.qntd)
        .fill()
        .reduce(n=>[...n,this.gerarNumNaoContido(n)],[])
        
        this.setState({
            randomNums : numeros
        })
        console.log(this.state.randomNums)

    }
   


    render(){
        return(
            <View>
                <Text style={styles.sectionTitle}>Gerador de Numeros aleatorios</Text>
                <TextInput
                keyboardType="numeric"
                style={styles.txtInp}
                placeholder="Quantidade de numeros"
                value={`${this.state.qntd}`}
                onChangeText={(txt)=>{
                    this.setQntd(txt)
                }}
                />
                <Button
                title="Gerar numeros"
                onPress={this.gerarNumeros}
                />
                <Text style={styles.sectionDescription}>{this.state.randomNums.join(',')}</Text>
            </View>
        )
    }
}
