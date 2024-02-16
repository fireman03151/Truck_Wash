import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"

const Map = () => {
    return (

        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
        </GoogleMap>

    );
}

export default Map;
