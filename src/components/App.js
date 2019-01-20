import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import PeoplePage from "./pages/PeoplePage";
import BibliographyPage from "./pages/BibliographyPage";
import AboutPage from "./pages/AboutPage";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Switch>
          <Route path="/" render={() => <HomePage {...this.props} />} exact />
          <Route path="/map" render={() => <MapPage {...this.props} subtitle="Map" />} />
          <Route path="/people" render={() => <PeoplePage {...this.props} subtitle="People" />} />
          <Route path="/bibliography" render={() => <BibliographyPage {...this.props} subtitle="Bibliography" />} />
          <Route path="/about" render={() => <AboutPage {...this.props} subtitle="About" />} />
        </Switch>
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
