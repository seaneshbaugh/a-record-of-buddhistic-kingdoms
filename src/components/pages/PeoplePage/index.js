import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTemplate from "../../templates/PageTemplate";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import styles from "./index.module.css";

class PeoplePage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={this.props.subtitle} />;
    const content = <div className={styles.content}>
                      <p>TODO: People information goes here.</p>
                    </div>;
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

PeoplePage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default PeoplePage;
