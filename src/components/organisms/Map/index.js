import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Map as LeafletMap, TileLayer as LeafletTileLayer } from "react-leaflet";
import styles from "./index.module.css";

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

    return (
      <div className={className}>
        <LeafletMap center={position} zoom={this.state.zoom}>
          <LeafletTileLayer attribution={attribution} url={url} />
        </LeafletMap>
      </div>
    );
  }
}

Map.propTypes = {
  points: PropTypes.any
};

export default Map;
