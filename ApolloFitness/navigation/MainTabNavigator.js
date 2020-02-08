import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WaterScreen from '../screens/WaterScreen';
import FoodScreen from '../screens/FoodScreen';
import WorkoutScreen from '../screens/WorkoutScreen';

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
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
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
  tabBarLabel: 'Water',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

WaterStack.path = '';

const FoodStack = createStackNavigator(
  {
    Food: FoodScreen,
  },
  config
);

FoodStack.navigationOptions = {
  tabBarLabel: 'Food',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

const WorkoutStack = createStackNavigator(
   {
     Workout: WorkoutScreen,
   },
   config
 );
 
 WorkoutStack.navigationOptions = {
   tabBarLabel: 'Workout',
   tabBarIcon: ({ focused }) => (
     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
   ),
 };

WorkoutStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  WaterStack,
  FoodStack,
  WorkoutStack,
});

tabNavigator.path = '';

export default tabNavigator;
