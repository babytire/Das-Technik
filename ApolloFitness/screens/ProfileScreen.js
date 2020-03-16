import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

export default class ProfileScreen extends Component {
    constructor() {
        super()
        this.state = {
            user: '',
            age: ''
        }
    }

    //update placeholders with current data
    componentDidMount() {
        this._loadData();
    }

    //remount settingScreen on return
    componentWillUnmount() {
        const {params} = this.props.navigation.state;
        params.callSet();
    }

    //userName field
    //age field
    //save button
    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                    style = {styles.inputs}
                    placeholder = {this.state.userName}
                    onChangeText={(text) => this.setState({userName: text})}
                />
                <TextInput
                    style = {styles.inputs}
                    placeholder = {this.state.age}
                    onChangeText = {(text) => this.setState({age: JSON.stringify(text)})}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress = {() => this.updateFields()}
                >
                    <Text> Save </Text>
                </TouchableOpacity>
            </View>
        );
    }

    //saves updated fields
    updateFields() {
        this._saveData('user', this.state.userName)
        this._saveData('age', this.state.age)
        alert('Data saved!')
    }

    //async function to save fields
    _saveData = async(key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
          } catch(e) {
            // save error
          }
    }

    //pull data from async
    _loadData = async() => {
        try {
            const name = await AsyncStorage.getItem('user')
            if (name != null) {
                this.setState({userName: name})
            }
            const age = await AsyncStorage.getItem('age')
            if (age != null) {
                this.setState({age: age})
            }
          } catch(e) {
            console.log('Catch')
            // read error
          }
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
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 15,
        margin: 10
      },
});
