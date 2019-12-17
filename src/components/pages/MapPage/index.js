import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTemplate from "../../templates/PageTemplate";
import Header from "../../organisms/Header";
import PageFooter from "../partials/PageFooter";
import Map from "../../organisms/Map";
import styles from "./index.module.css";

const subtitle = "Map";

class MapPage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={subtitle} />;
    const content = <main className={styles.content}>
                      <Map />
                    </main>;

    return (
      <PageTemplate
        header={header}
        content={content}
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
