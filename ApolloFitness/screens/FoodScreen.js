import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import inputQuery from '../components/InputQuery';

export default function FoodScreen() {
  return (
    <View style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <InputQuery name='Name' placeholder="Enter name here"/>
      <InputQuery name='Name' placeholder="Enter name here"/>
      <InputQuery name='Name' placeholder="Enter name here"/>
      <InputQuery name='Name' placeholder="Enter name here"/>
      <InputQuery name='Name' placeholder="Enter name here"/>
    </View>
  );
}

const styles = StyleSheet.create({
   // intentionally empty for now
});
