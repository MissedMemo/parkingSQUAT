import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

export default () => <MapView
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }} style={styles.map}
/>;

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

