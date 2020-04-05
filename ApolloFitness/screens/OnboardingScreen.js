import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
  AsyncStorage
} from "react-native";

export default class OnboardingScreen extends Component {
  constructor() {
    super();
    this.state = {
      user: "User",
      age: "Age",
      weight: "Weight",
      feet: "Feet",
      inch: "Inches",
      goal: "WL",
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style = {{fontSize: 40, textAlign: 'center'}}>Welcome to Apollo Fitness</Text>

        <TextInput
          style={styles.inputs}
          placeholder={"Your name"}
          onChangeText={text => this.setState({ userName: text })}
        />

        <TextInput
          style={styles.inputs}
          placeholder={"Age"}
          onChangeText={text => this.setState({ age: JSON.stringify(text) })}
        />

        <TextInput
          style={styles.inputs}
          placeholder={"Weight"}
          onChangeText={text => this.setState({ weight: JSON.stringify(text) })}
        />

        <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
          <TextInput
            style={styles.inputs}
            placeholder={"Feet"}
            onChangeText={text => this.setState({ feet: JSON.stringify(text) })}
          />
            <TextInput
            style={styles.inputs}
            placeholder={"Inches"}
            onChangeText={text => this.setState({ inch: JSON.stringify(text) })}
          />
        </View>

        <Picker
          style = {{width: 250}}
          selectedValue = {this.state.goal}
          onValueChange={(itemValue, itemIndex) => this.setState({ goal: itemValue })}>
          <Picker.Item label = "Weight Loss" value = "WL"/>
          <Picker.Item label = "Maintain Weight" value = "MW"/>
          <Picker.Item label = "Weight Gain" value = "WG"/>
        </Picker>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.updateFields()}>
          <Text> Get Started </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // saves updated fields, logs first launch, redirect to app
  updateFields() {
    this._saveData("user", this.state.userName);
    this._saveData("age", this.state.age);
    this._saveData("weight", this.state.weight);
    this._saveData("feet", this.state.feet);
    this._saveData("inch", this.state.inch);
    this._saveData("goal", this.state.goal);
    this._saveData("firstLaunch", "1")
    this.props.navigation.navigate("Home")
  }

  // async function to save fields
  _saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // save error
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  inputs: {
    height: 40,
    width: 150,
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
  }
});
