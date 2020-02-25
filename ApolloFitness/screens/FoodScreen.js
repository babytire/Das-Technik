import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import inputQuery from 'components/inputQuery.js';

export default function FoodScreen() {
  return (
    <View>
      <inputQuery name="Name", placeholder="Enter name here">
      </inputQuery>
    </View>
  );
}

const styles = StyleSheet.create({
   // intentionally empty for now
});
