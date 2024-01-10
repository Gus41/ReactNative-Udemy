/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MinMax from './src/components/MinMax';
import styles from './src/styles';
import Frag from './src/components/Frag';
import Button from './src/components/Button';
import Counter from './src/components/Counter';
import Father from './src/components/indirect/Father';
import Counter2 from './src/components/Counter_2/Counter2';
import Diferent from './src/components/Diferent';
import UserLogin from './src/components/UserLogin';
import ProductsList from './src/components/Products/ProductsList';

export default function App(){
  return(
    <SafeAreaView style={styles.App}>
      <View style={styles.sectionContainer}>
       <ProductsList/>
      </View>
    </SafeAreaView>
  )
}



