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



import Button from './src/components/Button';
import { test } from './src/functions';
import Display from './src/components/Display';
import Footer from './src/components/Footer';
// 00000C
/*
Estados
  Peso
    Meta Diaria
  Progesso
*/
function App(){
  return (
    <SafeAreaView style={styles.sectionContainer}>
      
      <Display objective={2500} />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:'#000012',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color:'white'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
