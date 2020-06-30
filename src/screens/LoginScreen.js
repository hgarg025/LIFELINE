import React from 'react';
import { View, Text, Button, TextInput , StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';

const LoginScreen = ({navigation}) => {
	return(
    <View>
    <Text>Username</Text>
    <TextInput placeholder='Enter your Username'  />
    <Text>Password</Text>
    <TextInput placeholder='Enter your Password'  />
    <Button title="Sign In" onPress={()=> navigation.navigate('Home')} />
    <Text>Not a User</Text>
    <Button title="Sign Up" onPress={()=> navigation.navigate('SignUp')} />
    </View>
	);
}
const styles = StyleSheet.create({});

export default withNavigation(LoginScreen);