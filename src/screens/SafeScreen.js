import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.main}>
        <Text>You Are Safe !!!</Text>
        </View>
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main:{
   marginBottom:50 
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: 400,
    height: 530,
  },
});