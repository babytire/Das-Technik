import * as Progress from "react-native-progress";
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Slider
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class WaterAddButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ozDrank: 0,
      sliderState: 8
    };
  }

  render = () => {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#bdc3c7", "#2c3e50"]}
          style={styles.gradient}
        />
        <View style={styles.progressBar}>
          {/* Progress bar is out of 64 oz (8 glasses)
                     until goals are added in a later issue */}
          <Progress.Bar
            style={{ transform: [{ rotate: "270deg" }] }}
            color="black"
            progress={this.state.ozDrank / 64}
            width={300}
            height={150}
          />
          <Text style={styles.title}>{this.state.ozDrank} oz</Text>
        </View>

        <View style={styles.buttonSlider}>
          <Slider
            thumbTintColor="white"
            minimumTrackTintColor="white"
            minimumValue={1}
            maximumValue={32}
            value={8}
            step={1}
            onValueChange={sliderValue =>
              this.setState({ sliderState: sliderValue })
            }
          />
          <Button
            color="white"
            title={`Add ${this.state.sliderState} oz`}
            onPress={() =>
              this.setState({
                ozDrank: this.state.ozDrank + this.state.sliderState
              })
            }
          />
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  progressBar: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonSlider: {
    flex: 1,
    alignItems: "stretch"
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 50,
    margin: 25
  }
});
