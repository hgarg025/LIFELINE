import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { withNavigation } from 'react-navigation';
import EmergencyScreen from './EmergencyScreen';

const HelpScreen = ({navigation}) => {
	return(
    <View>
    <View style={{marginBottom: 20}}>
    <Text>Emergency Contact 1</Text>
    <Text>Emergency Contact 2</Text>
    <Text>Emergency Contact 3</Text>
    <Text>Emergency Contact 4</Text>
    <Text>Emergency Contact 5</Text>
    </View>
    <Button title="Emergency" onPress={()=> navigation.navigate('Emergency',{screen : 'EmergencyScreen'})} />
    </View>
	);
}

const styles = StyleSheet.create({});

export default withNavigation(HelpScreen);