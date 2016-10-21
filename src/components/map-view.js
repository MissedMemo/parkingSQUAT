import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Dimensions, StyleSheet } from 'react-native';

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


//enableHighAccuracy: true,

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.787359,
        longitude: -122.408227,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  }


  updateRegion( position ) {
    const region = {
      latitude: position.coords.longitude,
      longitude: position.coords.latitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    };
    this.setState({ region });
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.updateRegion( position );
      },
      (error) => alert(error.message),
      {timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.updateRegion( position );
    });
  }
  
  render() {
    return <MapView 
      style = {styles.map}
      region={this.state.region}
      showsUserLocation = {true}
    />;
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
