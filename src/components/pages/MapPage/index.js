import React, { Component } from "react";
import PropTypes from "prop-types";
import TwoColumnPageTemplate from "../../templates/TwoColumnPageTemplate";
import Header from "../../organisms/Header";
import PageFooter from "../partials/PageFooter";
import Places from "../../../containers/Places";
import Map from "../../../containers/Map";
import styles from "./index.module.css";

const subtitle = "Map";

class MapPage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={subtitle} />;
    const places = <Places className={styles.places} />;
    const map = <Map className={styles.map} />;

    return (
      <TwoColumnPageTemplate
        header={header}
        sideContent={places}
        mainContent={map}
        footer={PageFooter}
      />
    );
  }
}

MapPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default MapPage;
