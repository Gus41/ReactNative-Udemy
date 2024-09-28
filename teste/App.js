import { StatusBar } from 'expo-status-bar';
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

