import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

class Map extends Component {
  render() {
    const key = import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_API_GKEY // Usa a chave de desenvolvimento durante a fase de desenvolvimento
    : process.env.VITE_API_GKEY;    // Usa a chave de produção durante a fase de produção
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