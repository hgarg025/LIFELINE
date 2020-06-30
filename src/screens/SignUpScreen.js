import React from 'react';
import { View, Text, TextInput,Button, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';

const SignUpScreen = ({navigation}) => {
	return(
    <View>
    <Text>Username</Text>
    <TextInput placeholder='Enter your Username'  />
    <Text>Password</Text>
    <TextInput placeholder='Enter your Password'  />
    <Button title="Submit" onPress={()=> navigation.navigate('Login')} />
    </View>
	);
}

const styles = StyleSheet.create({});

export default withNavigation(SignUpScreen);