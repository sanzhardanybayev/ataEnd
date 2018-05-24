import React from 'react';
import ReactDOM from 'react-dom';

export default class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google || prevProps.coords !== this.props.coords)
            this.loadMap();
    }

    loadMap = () => {
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);
            const mapConfig = Object.assign({}, {
                center: {lat: this.props.coords[0].lat, lng: this.props.coords[0].lng},
                zoom: 14,
                gestureHandling: "cooperative",
                mapTypeId: 'roadmap'
            });
            this.map = new maps.Map(node, mapConfig);
            const map = this.map;
            let poly = new google.maps.Polyline({
              strokeColor: '#000000',
              strokeOpacity: 1.0,
              strokeWeight: 3
            });
            poly.setMap(this.map);
            let path = poly.getPath();

            for(const coord of this.props.coords) {
                let latLng = new google.maps.LatLng(coord.lat, coord.lng);
                path.push(latLng);

                let infowindow = new google.maps.InfoWindow({
                  content: coord.content
                });
                const marker = new google.maps.Marker({
                  position: latLng,
                  title: 'Точка №' + path.getLength(),
                  map
                });
                marker.addListener('mouseover', function(event) {
                  infowindow.open(map, this);
                });
                marker.addListener('mouseout', function(event) {
                  infowindow.close(map, this);
                });
            }
        }
    }

    render() {
        const style = {
            width: '50vw',
            height: '60vh'
        };
        return(
            <div ref="map" style={style}>
                loading map...
            </div>
        );
    }
}
