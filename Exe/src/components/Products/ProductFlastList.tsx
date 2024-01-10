import React  from "react";
import { FlatList, Text, View } from "react-native";
import styles from "../../styles";
import Products from "./Products";

export default ()=>{
    return(
        <>
            <Text style={styles.sectionTitle}>Lista de Produtos</Text>
            <FlatList
                data={Products}
                keyExtractor= {i=>`${i.id}`}
                renderItem={({item})=>{
                    return(
                        <Text style={styles.sectionDescription}>{item.name} - {item.price}</Text>
                    )
                }}
            />
        </>
    )
}

