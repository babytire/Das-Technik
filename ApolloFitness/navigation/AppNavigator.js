import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import MainTabNavigator from "./MainTabNavigator";
import OnboardingScreen from "../screens/OnboardingScreen"
import React, { Component } from "react";
import { ActivityIndicator, StatusBar, AsyncStorage, StyleSheet, View } from "react-native";

//onboarding stack
const AuthStack = createStackNavigator({Onboarding: OnboardingScreen});

//splash screen
class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    //AsyncStorage.clear()
    this._loadData();
  }

  render() {
    return(
      <View style = {styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle = "default"/>
      </View>
    );
  }

  //function call to check if first launch in async
  _loadData = async() => {
    const firstLaunch = await AsyncStorage.getItem("firstLaunch")
    this.props.navigation.navigate(firstLaunch !== "1" ? 'Auth' : 'App')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center"
  },
});

//auth stack implementation
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: MainTabNavigator,
  },
  {
    initialRouteName: 'AuthLoading'
  }));