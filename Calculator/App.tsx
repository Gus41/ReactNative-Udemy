import { SafeAreaView, Text, View } from "react-native";
import styles from "./src/styles";
import Button from "./src/components/Button";
import Display from "./src/components/Display";
import { useState } from "react";

export default function App(){
  const [DisplayValue,setDisplayValue] = useState(0)
  return(
    <SafeAreaView style={styles.sectionContainer}>
      <Display value={DisplayValue} />
      <View style={styles.Buttons}>
        <Button
        label={'AC'}
        />
         <Button
        label={'/'}
        />
         <Button
        label={'7'}
        />
         <Button
        label={'8'}
        />
         <Button
        label={'9'}
        />
         <Button
        label={'*'}
        />
        <Button
        label={'4'}
        />
        <Button
        label={'5'}
        />
        <Button
        label={'6'}
        />
        <Button
        label={'-'}
        />
        <Button
        label={'1'}
        />
        <Button
        label={'2'}
        />
        <Button
        label={'3'}
        />
        <Button
        label={'+'}
        />
        <Button
        label={'0'}
        />
        <Button
        label={'.'}
        />
        <Button
        label={'='}
        />
      </View>
    </SafeAreaView>
  )
}