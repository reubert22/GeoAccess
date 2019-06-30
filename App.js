//@flow
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './src/views/HomeScreen/Home';
import SplashScreen from './src/views/SplashScreen/Splash';

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const AuthStack = createStackNavigator({
  Splash: {
    screen: SplashScreen,
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
