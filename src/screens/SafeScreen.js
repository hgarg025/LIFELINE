import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View>
      <View style={styles.main}>
        <Text style={styles.text}>You Are Safe !!!</Text>
        </View>
        
      <View style={styles.container}>
      <MapView
  region={{latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0021,}}
   style={styles.mapStyle}
>
    <Marker
      coordinate={{latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,}}
    />
</MapView>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize: 40,
    fontWeight: "900",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  main:{
    marginTop:20,
  marginBottom: 50
  },
  container: {
    margin:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 5
  },
  mapStyle: {
    width: 310,
    height: 330,
  },
});