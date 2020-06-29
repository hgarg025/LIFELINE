import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

const navigator = createStackNavigator(
  {
    Home : HomeScreen,
    Login : LoginScreen
  },
{
   initialRouteName: 'Login',
   defaultNavigationOptions: {
   	title: 'LIFELINE'
   }
}
	);

export default createAppContainer(navigator);
