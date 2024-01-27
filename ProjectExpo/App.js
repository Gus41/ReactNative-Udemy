import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InitialPage from './components/InitialPage';
import { useState } from 'react';
import frontPage from './components/frontPage';
import Register from './components/Register';
import Welcome from './screens/Welcome';
export default function App() {

  const [user,setUser] = useState(null)
  const [userIsregistred,setUserIsRegistered] = useState(false)

  
  return (
    <>
      <Welcome FirtsAcces={!userIsregistred} />
    </>
  );
}


