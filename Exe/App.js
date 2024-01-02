import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CompOne from './components/CompOne';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{
        color:'#93CBFF'
      }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto"/>
      <CompOne/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
