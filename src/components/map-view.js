import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Dimensions, StyleSheet } from 'react-native';

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

/* Suggested coords for XCode mobile simulator...
( via Simulator menu: Debug/Location/Custom Location )
latitude: 37.871273,
longitude: -122.268719
*/

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: null
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.updateRegion( position );
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.updateRegion( position );
    });
  }

  updateRegion( position ) {
    const region = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    };
    this.setState({ region });
  }

  render() {
    return <MapView 
      style = {styles.map}
      showsUserLocation = {true}
      followUserLocation={true}
      region={this.state.region}
    />;
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
