import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Field from './Field';

export default()=>{
    return(
        <>
            <Field text='Como devemos te chamar?' />
            <Field text='Seu peso ( kg )' />
            <Field text='Sua altura ( cm )' />
        </>
    )
}