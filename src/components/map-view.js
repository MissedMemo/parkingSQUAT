import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Dimensions, StyleSheet } from 'react-native';

import { queryParkingData } from '../remote-comms/api';
import CustomMarker from './map-marker';
import CustomCallout from './map-callout';

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialRegion: {
        /* ensure demo always starts in an
        area containing actual parking data! */
        latitude: 37.801242,
        longitude: -122.4012767,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      parkingSpots: []
    };

    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
  }


  componentWillMount() {

    /* For reference only...
    Since RideCell data is limited to San Francisco,
    it currently makes no sense to try to initialize
    our map based on user's actual GPS coordinates
    via code similar to the below.

    You can set 'current location' in XCode's mobile
    simulator menu: (Debug/Location/Custom Location)
    to lat-long coordinates identical, or close to,
    our 'initialRegion' to simulate this feature.
    */

    /*
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setInitialRegion( position );
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    */

    /*
    this.watchID = navigator.geolocation.watchPosition((position) => {
      //Not currently tracking user MOVEMENT!
    });
    */
  }

  // handle map scroll event...
  onRegionChangeComplete( region ) {
    this.showNearbyParking(region);
  }

  showNearbyParking( region ) {
    queryParkingData( region )
    .then( parkingSpots => {
      this.setState({ parkingSpots });
    });
  }

  renderParkingSpots() {
    return this.state.parkingSpots.map( spot => {
      return <MapView.Marker key={ spot.id }
        coordinate={{
          latitude: parseFloat(spot.lat),
          longitude: parseFloat(spot.lng)
        }}
      >
        <CustomMarker {...spot} />
        <MapView.Callout style={ styles.callout }>
          <CustomCallout {...spot} />
        </MapView.Callout>
      </MapView.Marker>;
    });
  }

  render() {
    return <MapView 
      style = {styles.map}
      showsUserLocation = {true}
      followUserLocation={true}
      onRegionChangeComplete={ this.onRegionChangeComplete }
      initialRegion={this.state.initialRegion}
    >
      { this.renderParkingSpots() }
    </MapView>;
  }
}

/*
  Need to explicitly set Callout width is an open BUG in React Native!
  (see https://github.com/airbnb/react-native-maps/issues/427 ) 
*/

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }, 
  callout: {
    width: 200
  }
});
