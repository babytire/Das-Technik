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
import { LinearGradient } from "expo-linear-gradient";

export default class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      user: "User",
      age: "Age",
      weight: "Weight",
      feet: "Feet",
      inch: "Inches",
      goal: "WL"
    };
  }

  // update placeholders with current data
  componentDidMount() {
    this._loadData();
  }

  // remount settingScreen on return
  componentWillUnmount() {
    const { params } = this.props.navigation.state;
    params.callSet();
  }

  // userName field
  // age field
  // save button
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#bdc3c7", "#2c3e50"]}
          style={styles.gradient}
        />
        <TextInput
          style={styles.inputs}
          placeholder={this.state.userName}
          placeholderTextColor="black"
          onChangeText={text => this.setState({ userName: text })}
        />

        <TextInput
          style={styles.inputs}
          placeholder={this.state.age}
          placeholderTextColor="black"
          onChangeText={text => this.setState({ age: JSON.stringify(text) })}
        />

        <TextInput
          style={styles.inputs}
          placeholder={this.state.weight}
          placeholderTextColor="black"
          onChangeText={text => this.setState({ weight: JSON.stringify(text) })}
        />

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TextInput
            style={styles.inputs}
            placeholder={this.state.feet}
            placeholderTextColor="black"
            onChangeText={text => this.setState({ feet: JSON.stringify(text) })}
          />
          <TextInput
            style={styles.inputs}
            placeholder={this.state.inch}
            placeholderTextColor="black"
            onChangeText={text => this.setState({ inch: JSON.stringify(text) })}
          />
        </View>

        <Picker
          style={{ width: 250 }}
          selectedValue={this.state.goal}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ goal: itemValue })
          }
        >
          <Picker.Item label="Weight Loss" value="WL" />
          <Picker.Item label="Maintain Weight" value="MW" />
          <Picker.Item label="Weight Gain" value="WG" />
        </Picker>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.updateFields()}
        >
          <Text> Save </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // saves updated fields
  updateFields() {
    this._saveData("user", this.state.userName);
    this._saveData("age", this.state.age);
    this._saveData("weight", this.state.weight);
    this._saveData("feet", this.state.feet);
    this._saveData("inch", this.state.inch);
    this._saveData("goal", this.state.goal);
  }

  // async function to save fields
  _saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // save error
    }
  };

  // pull data from async
  _loadData = async () => {
    try {
      const name = await AsyncStorage.getItem("user");
      if (name != null) {
        this.setState({ userName: name });
      }
      const age = await AsyncStorage.getItem("age");
      if (age != null) {
        this.setState({ age });
      }
      const weight = await AsyncStorage.getItem("weight");
      if (weight != null) {
        this.setState({ weight });
      }
      const feet = await AsyncStorage.getItem("feet");
      if (feet != null) {
        this.setState({ feet });
      }
      const inch = await AsyncStorage.getItem("inch");
      if (inch != null) {
        this.setState({ inch });
      }
      const goal = await AsyncStorage.getItem("goal");
      if (goal != null) {
        this.setState({ goal });
      }
    } catch (e) {
      console.log("Catch");
      // read error
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 15,
    margin: 10
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
