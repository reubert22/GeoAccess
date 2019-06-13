//@flow
import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import HomeScreen from './src/views/Home';
import LoginScreen from './src/views/Login';

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: 'Auth'
    }
  )
);
