import React from 'react';
import {Input} from 'react-native-elements'
import { View, Text, Button, TextInput , StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';

const SignUpScreen = ({navigation}) => {
	return(
    <View style={styles.container}>
        <View style={styles.textBox}>
        <Text style={styles.text}>Username</Text>
        </View>
    <Input placeholder='Enter your Username' />
    <View style={styles.textBox}>
        <Text style={styles.text}>Password</Text>
        </View>
    <Input placeholder='Enter your Password'  />
    <View  style={styles.button}>
    <Button title="Submit" onPress={()=> navigation.navigate('Login')} />
    </View >
    </View>
	);
}
const styles = StyleSheet.create({
    button:{
        marginHorizontal: 50,
        marginTop: 5,       
    },
    container:{
        marginTop:10,
        marginLeft: 10
    },
    text:{
        fontSize: 20,
        fontWeight:"900"
    },
    textBox:{
        marginLeft: 10
    },
    text2:{
        fontSize: 20,
        fontWeight:"900",
        textAlign: 'center', 
    },
    textBox2:{
        marginVertical: 10
    },
});

export default withNavigation(SignUpScreen);