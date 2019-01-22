import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTemplate from "../../templates/PageTemplate";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Map from "../../organisms/Map";
import styles from "./index.module.css";

const subtitle = "Map";

class MapPage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={subtitle} />;
    const content = <main className={styles.content}>
                      <Map />
                    </main>;
    const footer = <Footer>TODO: Footer content goes here.</Footer>;

    return (
      <PageTemplate
        header={header}
        content={content}
        footer={footer}
      />
    );
  }
}

MapPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default MapPage;
