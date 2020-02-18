import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WaterScreen from '../screens/WaterScreen';
import FoodScreen from '../screens/FoodScreen';
import { NavigationEvents } from 'react-navigation';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home': 'md-home'}/>
  ),
};

HomeStack.path = '';

const WaterStack = createStackNavigator(
  {
    Water: WaterScreen,
  },
  config
);

WaterStack.navigationOptions = {
  tabBarIcon: <Image style={{ width: 30, height: 30 }} source={require('../assets/images/bottleTabBar.png')}/>,
};

WaterStack.path = '';

const FoodStack = createStackNavigator(
  {
    Food: FoodScreen,
  },
  config
);

FoodStack.navigationOptions = {
  tabBarIcon: <Image style={{ width: 30, height: 30 }} source={require('../assets/images/forkSpoonTabBar.png')}/>,
};

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  WaterStack,
  FoodStack,
}, {
  tabBarOptions: {
    showLabel: false,
  }
});

tabNavigator.path = '';

export default tabNavigator;
