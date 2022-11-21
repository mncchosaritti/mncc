import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


// const FINAL_API_KEY = "AIzaSyC1V5iQzIKmNEf_ZXz50_iKBalGOvk9mOM"

// const GoogleMapContainer = () => {
//     return (
//         <Map
//             google={this.props.google}
//             zoom={14}

//             initialCenter={
//                 {
//                     lat: 14.896278,
//                     lng: 75.555646
//                 }
//             }
//         />
//         // <GoogleMap
//         //     yesIWantToUseGoogleMapApiInternals
//         //     apiKeys={FINAL_API_KEY}
//         //     center={[14.896278, 75.555646]}
//         //     zoom={20}
//         // />
//     )
// }

// export default GoogleApiWrapper({
//     apiKey: FINAL_API_KEY
// })(GoogleMapContainer);

// export default GoogleMapContainer

const mapStyles = {
    width: '10%',
    height: '10%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: -1.2884,
                        lng: 36.8233
                    }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: FINAL_API_KEY
})(MapContainer);