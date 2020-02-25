import React, { Component } from 'react';
import { render } from 'react-dom';

class inputQuery extends Component {
    render = () => {
        return (
            <View style={{
                flexDirection: 'row', 
                flex: 1, 
            }}>
                <Text>{name}</Text>
                <TextInput placeholder={placeholder}></TextInput>
            </View>
        );
    }
}

export default inputQuery;