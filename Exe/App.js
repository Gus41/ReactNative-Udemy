/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
import FlexBox from './src/components/layout/FlexBox';
import Mega from './src/components/mega/Mega';

export default function App(){
  return(
    <SafeAreaView style={styles.App}>
      <Mega
      qntd = {5}
      />
    </SafeAreaView>
  )
}



