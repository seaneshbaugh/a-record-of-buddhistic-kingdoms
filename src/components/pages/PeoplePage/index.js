import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTemplate from "../../templates/PageTemplate";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import People from "../../organisms/People";
import styles from "./index.module.css";
import people from "../../../data/people.json";

const subtitle = "People";

class PeoplePage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={subtitle} />;
    const content = <main className={styles.content}>
                      <People people={people} />
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

PeoplePage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default PeoplePage;
