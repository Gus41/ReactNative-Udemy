import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/routes/Routes';
import { AppProvider } from './src/contexts/AppContext';
export default function App() {
  return (
    <AppProvider>
      <Routes />
      <StatusBar style='dark' />
    </AppProvider>
  );
}

