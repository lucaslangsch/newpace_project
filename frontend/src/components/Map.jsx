import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};
const key = import.meta.env.VITE_API_GKEY   // Usa a chave de produção durante a fase de produção

class Map extends Component {
  render() {
    console.log('meta.env: ',import.meta.env);
    const {location} = this.props;
    return (
      <>
        {
          window.google === undefined ? 
            <LoadScript
              googleMapsApiKey={key}
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