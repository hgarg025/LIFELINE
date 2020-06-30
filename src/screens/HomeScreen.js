import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SafeScreen from './SafeScreen';
import FogScreen from './FogScreen';
import HelpScreen from './HelpScreen';
import MetricsScreen from './MetricsScreen';
import EmergencyScreen from './EmergencyScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={SafeScreen} />
      <Tab.Screen name="Fog" component={FogScreen} />
      <Tab.Screen name="Help" component={HelpScreen} />
      <Tab.Screen name="Metrics" component={MetricsScreen} />
      <Tab.Screen name="Emergency" component={EmergencyScreen} />
    </Tab.Navigator>
  );
}

const HomeScreen = () => {
	return(
        <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
	);
}

const styles = StyleSheet.create({});

export default HomeScreen;