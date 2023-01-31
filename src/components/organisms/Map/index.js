import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./index.module.css";
// See https://github.com/PaulLeCam/react-leaflet/issues/453.
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

const attribution = "Map data: &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>, <a href=\"http://viewfinderpanoramas.org\">SRTM</a> | Map style: &copy; <a href=\"https://opentopomap.org\">OpenTopoMap</a> (<a href=\"https://creativecommons.org/licenses/by-sa/3.0/\">CC-BY-SA</a>)";
const url = "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";

class Map extends Component {
  state = {
    lat: 34.2590616,
    lng: 108.687021,
    zoom: 8
  };

  render() {
    const className = classNames(this.props.className, styles.map);

    const position = [this.state.lat, this.state.lng];

    const markers = this.props.places.map((place, index) => {
      const markerPosition = [place.position.lat, place.position.lng];

      return <Marker position={markerPosition} key={index.toString()}>
               <Popup>
                 {place.name}
               </Popup>
             </Marker>;
    });

    return (
      <div className={className}>
        <MapContainer center={position} zoom={this.state.zoom} whenCreated={ (mapInstance) => { this.props.setMapInstance(mapInstance); } }>
          <TileLayer attribution={attribution} url={url} />
          {markers}
        </MapContainer>
      </div>
    );
  }
}

Map.propTypes = {
  points: PropTypes.any
};

export default Map;
