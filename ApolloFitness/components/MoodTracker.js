import React, { Component } from "react";
import { View } from "react-native";
import { ButtonGroup } from "react-native-elements";

export default class InputQuery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 2
    };
  }

  render = () => {
    const buttons = ["😀", "🙂", "😐", "🙁", "😞"];
    const { selectedIndex } = this.state;

    return (
      <View style={this.props.style}>
        <ButtonGroup
          containerStyle={this.props.containerStyle}
          onPress={this.props.onPress}
          selectedIndex={selectedIndex}
          buttons={buttons}
          selectedButtonStyle={{ backgroundColor: "#1F1F1F" }}
          buttonStyle={{ backgroundColor: "#1F1F1F" }}
        />
      </View>
    );
  };
}
