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
      region: null,
      mapMarkers: [
        {
          title: 'marker A',
          description: 'testing...',
          coords: {
            latitude: 37.8721366,
            longitude: -122.2702216
          }
        },
        {
          title: 'marker B',
          description: 'testing...',
          coords: {
            latitude: 37.869960,
            longitude: -122.2711953
          }
        },
        {
          title: 'marker C',
          description: 'testing...',
          coords: {
            latitude: 37.870796,
            longitude: -122.266218
          }
        },
        {
          title: 'marker D',
          description: 'testing...',
          coords: {
            latitude: 37.874609,
            longitude: -122.269019
          }
        }
      ]
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
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.updateRegion( position );
    });
  }

  updateRegion( position ) {
    console.log( 'coords:', position.coords );
    const region = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    };
    this.setState({ region });
  }

  onRegionChangeComplete( region ) {
    console.log( 'new region:', region );
  }

  render() {
    return <MapView 
      style = {styles.map}
      showsUserLocation = {true}
      followUserLocation={true}
      onRegionChangeComplete={ this.onRegionChangeComplete }
      region={this.state.region}
    >
      { this.state.mapMarkers.map( marker =>
        <MapView.Marker key={ marker.title }
          coordinate={ marker.coords }
          title={ marker.title }
          description={ marker.description }
        />
      )}
    </MapView>;
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
