import React, { Component } from "react";
import { View } from "react-native";
import InputQuery from "../components/InputQuery";

export default class FoodScreen extends Component {
  render = () => {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <InputQuery name="Name" placeholder="Enter name here" />
        <InputQuery name="Calories" placeholder="Enter calories here" />
        <InputQuery name="Fat" placeholder="Enter fat here" />
        <InputQuery
          name="Carbohydrates"
          placeholder="Enter carbohydrates here"
        />
        <InputQuery name="Protein" placeholder="Enter protein here" />
      </View>
    );
  };
}
