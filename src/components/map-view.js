import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { queryParkingData } from '../remote-comms/api';
import { Dimensions, StyleSheet } from 'react-native';
import mapPin_ParkingSpot from './map-pin.png';

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

/* RiceCell data set limited to San Francisco!
Suggested "current position" for XCode mobile simulator...
( set via Simulator menu: Debug/Location/Custom Location )
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
        this.initMapView( position );
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    
    /*
    this.watchID = navigator.geolocation.watchPosition((position) => {
      Not currently tracking user MOVEMENT (just initial position)
    });
    */
  }

  initMapView( position ) {
    const region = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    };
    this.setState({ region }, () => {
      this.showNearbyParking(region);
    });
  }

  // handle map scroll event...
  onRegionChangeComplete( region ) {
    this.setState({ region });
    this.showNearbyParking(region);
  }

  showNearbyParking( region ) {
    queryParkingData( region )
    .then( parkingSpots => {
      this.setState({ parkingSpots });
    });
  }

  render() {
    if ( !this.state.region ) {
      return null;
    } else {
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
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
