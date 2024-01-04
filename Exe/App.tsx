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

export default function App(){
  return(
    <SafeAreaView style={styles.App}>
      <View>
        <Frag tittle='TituloFrag' sec='Texto secundario' />
        <Button/>
      </View>
    </SafeAreaView>
  )
}



