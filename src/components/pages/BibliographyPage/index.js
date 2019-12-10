import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTemplate from "../../templates/PageTemplate";
import Header from "../../organisms/Header";
import Bibliography from "../../organisms/Bibliography";
import styles from "./index.module.css";
import bibliography from "../../../data/bibliography.json";

const subtitle = "Bibliography";

class BibliographyPage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={subtitle} />;
    const content = <main className={styles.content}>
                      <Bibliography entries={bibliography} />
                    </main>;

    return (
      <PageTemplate
        header={header}
        content={content}
      />
    );
  }
}

BibliographyPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default BibliographyPage;
