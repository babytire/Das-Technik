import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

export default class InputQuery extends Component {
    render = () => {
        return (
            <View style={{
                flexDirection: 'row', 
                flex: 1,
            }}>
                <Text style={this.props.style}>{this.props.name + ': '}</Text>
                <TextInput placeholder={this.props.placeholder} onChangeText={this.props.onChangeText}></TextInput>
            </View>
        );
    }
}
