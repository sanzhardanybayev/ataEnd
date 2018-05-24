import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from './GoogleMap';

class MapContainer extends React.Component {
    render() {
        console.log(this.props.coords);
        return(
            <div className="MapContainer">
                <GoogleMap google={this.props.google} coords={this.props.coords}/>
            </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCkqGyvbjQsVY8C1gCjMsXlQzE5lOL_mOQ',
  v: '3.25'
})(MapContainer);
