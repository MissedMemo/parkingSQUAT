const parkingData = [
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
];

export const availableParking = ( region ) => {
  
  var url = 'https://ridecellparking.herokuapp.com/api/v1/parkinglocations/search?format=json&lat=37.8721366&lng=-122.2702216';

  //console.log( 'api call with region:', region );

  //return parkingData;
  
  return fetch( url )
    .then( response => response.json() )
    .then( data => data )
    .catch( e => console.log( 'error fetching parking data:', e ) );
};