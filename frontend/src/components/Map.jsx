import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

class Map extends Component {
  render() {
    const {location} = this.props;
    return (
      <>
        {
          window.google === undefined ? 
            <LoadScript
              googleMapsApiKey={import.meta.env.VITE_API_GOOGLE_KEY}
            >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location}
              zoom={14}
            >
              <MarkerF position={location}/>
            </GoogleMap>
            </LoadScript> :
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location}
              zoom={14}
            >
              <MarkerF position={location}/>
            </GoogleMap>
        }
      </>
    )
  }
}

export default Map;