import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { availableParking } from '../remote-comms/api';
import { Dimensions, StyleSheet } from 'react-native';
import mapPin_ParkingSpot from './map-pin.png';

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

/* RiceCell data set limited to San Francisco!
   Suggested coords for XCode mobile simulator...
( via Simulator menu: Debug/Location/Custom Location )
latitude: 37.801242,
longitude: -122.4012767
*/

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: null,
      parkingSpots: []
    };

    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
  }

  componentWillMount() {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.updateRegion( position );
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );

    /* Not currently tracking user's MOVEMENT (just initial position)
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.updateRegion( position );
    });
    */
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

  // Update parking data when user scrolls the map
  onRegionChangeComplete( region ) {
    availableParking( region )
    .then( parkingSpots => {
      this.setState({ parkingSpots });
    });
  }

  render() {
    return <MapView 
      style = {styles.map}
      showsUserLocation = {true}
      followUserLocation={true}
      onRegionChangeComplete={ this.onRegionChangeComplete }
      region={this.state.region}
    >
      { this.state.parkingSpots.map( spot => {
        return <MapView.Marker key={ spot.id }
          coordinate={{
            latitude: parseFloat(spot.lat),
            longitude: parseFloat(spot.lng)
          }}
          title={ spot.name }
          description={ 'no description' }
          image={ mapPin_ParkingSpot }
        />;
      })}
    </MapView>;
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
