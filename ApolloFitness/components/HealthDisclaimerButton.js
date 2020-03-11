import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class HealthDisclaimerButton extends Component {
    constructor(props) {
        super(props)
    }

    onPress = () => {
        alert('This app does not replace a real doctor')
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> Disclaimer Stuff </Text>
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
        margin: 10,
      },
});