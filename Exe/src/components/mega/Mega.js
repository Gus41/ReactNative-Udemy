import React, { useState }  from "react";
import { Alert, Button, FlatList, Text, TextInput, View } from "react-native";
import styles from "../../styles";
import Num from "./Num";


export default class Mega extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        qntd : this.props.qntd,
        randomNums: []
    }
    setQntd(n){
        this.setState({qntd : Number(n)})
    }
    gerarNumNaoContido = (nums)=>{
        const novo = parseInt(Math.random() * 60 ) + 1
        return nums.includes(novo) ? this.gerarNumNaoContido(nums) : novo
        
    }
    gerarNumeros = ()=>{
       
        let numeros = Array(this.state.qntd)
        .fill([])
        .reduce(n=>[...n,this.gerarNumNaoContido(n)],[])
        
        this.setState({
            randomNums : numeros
        })
    }
    showNumbers = ()=>{
        const nums = this.state.randomNums

        return nums.map(e=>{
            return(
                <Num key={e} num={e}/>
            )
        })
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
                <View style={
                    {
                        justifyContent:'center',
                        flexDirection:'row',
                        flexWrap:'wrap',
                        margin:10
                    }
                }>
                    {this.showNumbers()}
                </View>
            </View>

        )
    }
}
