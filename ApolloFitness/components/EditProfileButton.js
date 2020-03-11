import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native'
import { render } from 'react-dom'

export default class EditProfileButton extends Component {
    constructor (props) {
        super(props)
    }

    onPress = () => {
        alert('Will open change window')
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> Edit Profile </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 15,
        margin: 10
      },
});