const baseUrl = 'https://ridecellparking.herokuapp.com';
const queryAPI = 'api/v1/parkinglocations/search?format=json';

export const queryParkingData = ( region ) => {

  var queryParams = `&lat=${region.latitude}&lng=${region.longitude}`;

  return fetch( `${baseUrl}/${queryAPI}${queryParams}` )
    .then( response => response.json() )
    .then( data => data )
    .catch( e => console.log( 'error fetching parking data:', e ) );
};