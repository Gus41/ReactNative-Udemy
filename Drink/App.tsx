import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import DashBoard from './src/screens/DashBoard'

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        
        <StatusBar style="auto" />
        <DashBoard />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
