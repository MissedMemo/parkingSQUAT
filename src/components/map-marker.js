/*
  We don't actually add any customization to the default
  MapView.Marker, but our custom CALLOUT will not render
  unless there is an associated custom Marker
*/

import React, {Component} from 'react';
import { View, Image, StyleSheet } from 'react-native';

import mapPin from './map-pin.png';


export default class CustomMarkerView extends Component {

  render() {
    return <View>
      <Image style={ styles.image } source={ mapPin } />
    </View>;
  }

}

var styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32
  }
});