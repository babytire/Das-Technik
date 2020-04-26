import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default class HomeScreen extends Component {
  _happyPress() {alert("Happy")}
  _mehPress() {alert("Meh")}
  _sadPress() {alert("Sad")}

  render() {
    return (
      <View style = {styles.container}>
        <LinearGradient
          colors={['#bdc3c7', '#2c3e50']}
          style={styles.gradient}
        />
        <Text style = {styles.title}>"One step at a time. One bite at a time. One sip at a time."</Text>
        <Text style = {{color: 'white', textAlign: 'center', fontSize: 25}}> How are you today? </Text>
        <View style = {{flexDirection: 'row', alignContent: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style = {styles.button} onPress = {this._happyPress}>
          <Text style = {{fontSize: 100}}>🙂</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress = {this._mehPress}>
          <Text style = {{fontSize: 100}}>😐</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress = {this._sadPress}>
          <Text style = {{fontSize: 100}}>🙁</Text>
        </TouchableOpacity>
      </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "stretch",
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title: {
    textAlign: "center",
    fontStyle: 'italic',
    fontWeight: '200',
    fontSize: 50,
    margin: 25
  },
  button: {
    paddingHorizontal: 10,
  }
});
