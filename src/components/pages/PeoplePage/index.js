import React, { Component } from "react";
import PropTypes from "prop-types";
import TwoColumnPageTemplate from "../../templates/TwoColumnPageTemplate";
import Header from "../../organisms/Header";
import PageFooter from "../partials/PageFooter";
import People from "../../../containers/People";
import Person from "../../../containers/Person";
import styles from "./index.module.css";

const subtitle = "People";

class PeoplePage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={subtitle} />;
    const people = <People className={styles.content} />;
    const currentPerson = <Person {...this.props.currentPerson} />;

    return (
      <TwoColumnPageTemplate
        header={header}
        sideContent={people}
        mainContent={currentPerson}
        footer={PageFooter}
      />
    );
  }
}

PeoplePage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default PeoplePage;
