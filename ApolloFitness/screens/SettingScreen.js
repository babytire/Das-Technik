import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import HealthDisclaimerButton from "../components/HealthDisclaimerButton";
import { LinearGradient } from 'expo-linear-gradient';

export default class SettingScreen extends Component {
  constructor() {
    super();
    this.state = {
      userName: "User"
    };
  }

  componentDidMount() {
    this._loadData();
  }

  setFun() {
    this._loadData();
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#bdc3c7', '#2c3e50']}
          style={styles.gradient}
        />
        <Text style={styles.title}>Hi, {this.state.userName}!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate("Profile", {
              callSet: this.setFun.bind(this)
            })
          }
        >
          <Text> Edit Profile </Text>
        </TouchableOpacity>
        <HealthDisclaimerButton />
      </View>
    );
  }

  _loadData = async () => {
    try {
      const name = await AsyncStorage.getItem("user");
      if (name != null) {
        this.setState({ userName: name });
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
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    margin: 100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    margin: 10
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
