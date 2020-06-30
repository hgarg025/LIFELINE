import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import EmergencyScreen from './src/screens/EmergencyScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const navigator = createStackNavigator(
  {
    Home : HomeScreen,
    Login : LoginScreen,
    Emergency : EmergencyScreen,
    SignUp : SignUpScreen
  },
{
   initialRouteName: 'Login',
   defaultNavigationOptions: {
   	title: 'LIFELINE'
   }
}
	);

export default createAppContainer(navigator);
