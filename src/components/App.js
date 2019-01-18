import React, { Component } from "react";
import PropTypes from "prop-types";
import HomePage from "./pages/HomePage";
import styles from "./App.module.css";

const defaultState = {
  currentChapter: 0
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  render() {
    // This is a temporary hack.
    return (
      <div className={styles.app}>
        <HomePage {...this.props} {...this.state} />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  book: PropTypes.shape({
    chapters: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        content: PropTypes.shape({
          paragraphs: PropTypes.arrayOf(
            PropTypes.shape({
              sentences: PropTypes.arrayOf(PropTypes.string).isRequired
            }).isRequired
          ).isRequired
        }).isRequired,
        footnotes: PropTypes.arrayOf(
          PropTypes.shape({
            paragraphs: PropTypes.arrayOf(
              PropTypes.shape({
                sentences: PropTypes.arrayOf(PropTypes.string).isRequired
              }).isRequired
            ).isRequired
          }).isRequired
        ).isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};

export default App;
