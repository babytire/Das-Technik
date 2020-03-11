import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import EditProfileButton from '../components/EditProfileButton'
import HealthDisclaimerButton from '../components/HealthDisclaimerButton'

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'User'
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Welcome, {this.state.userName}!
                </Text>     
                <EditProfileButton/>
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
});