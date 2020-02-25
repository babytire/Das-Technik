import React, { Component } from 'react';
import { render } from 'react-dom';

export default class InputQuery extends Component {
    render = () => {
        return (
            <View style={{
                flexDirection: 'row', 
                flex: 1, 
            }}>
                <Text>{this.props.name}</Text>
                <TextInput placeholder={this.props.placeholder}></TextInput>
            </View>
        );
    }
}