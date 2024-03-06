import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import MyTabs from './src/routes/routes';

export default function App() {
  return (
    <NativeBaseProvider>
        <StatusBar style="auto" />
        <MyTabs />
    </NativeBaseProvider>
  );
}

