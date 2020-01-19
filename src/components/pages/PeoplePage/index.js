import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTemplate from "../../templates/PageTemplate";
import Header from "../../organisms/Header";
import PageFooter from "../partials/PageFooter";
import People from "../../../containers/People";
import styles from "./index.module.css";
import people from "../../../data/people.json";

const subtitle = "People";

class PeoplePage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={subtitle} />;
    const content = <main className={styles.content}>
                      <People people={people} />
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

PeoplePage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default PeoplePage;
