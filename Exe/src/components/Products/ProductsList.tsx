import React  from "react";
import { Text, View } from "react-native";
import styles from "../../styles";
import Products from "./Products";


export default (props:any)=>{
    return(
        <>
        <Text style={styles.sectionTitle}>Produtos a</Text>
        {Products.map((e)=>{
            return(
                <Text style={styles.sectionDescription} key={e.id}>{e.name} - {e.price}</Text>
            )
        })}
        </>
    )
}