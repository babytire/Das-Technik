import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import HealthDisclaimerButton from '../components/HealthDisclaimerButton'
import ProfileScreen from '../screens/ProfileScreen';


export default class SettingScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Welcome, {'User'}!
                </Text>     
                <TouchableOpacity
                    style={styles.button}
                    //onPress={() => alert('Take me somewhere')}
                    onPress = {() => this.props.navigation.navigate('Profile')}
                >
                    <Text> Edit Profile </Text>
                </TouchableOpacity>
                <HealthDisclaimerButton/>
            </View> 

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        margin: 100
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 15,
        margin: 10
      },
});