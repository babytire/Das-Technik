import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native'

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                    style = {styles.inputs}
                    placeholder = 'Name'    
                />
                <TextInput
                    style = {styles.inputs}
                    placeholder = 'Age'
                />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    inputs: {
        height: 40,
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },

});