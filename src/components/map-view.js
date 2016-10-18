import React from 'react';
import { MapView, StyleSheet } from 'react-native';

export default () => <MapView 
  showsPointsOfInterest={false}
  showsUserLocation={true}
  followUserLocation={true}
  style={styles.map}
/>;

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});