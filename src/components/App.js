import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../containers/HomePage";
import MapPage from "./pages/MapPage";
import PeoplePage from "../containers/PeoplePage";
import BibliographyPage from "./pages/BibliographyPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";
import styles from "./App.module.css";

const title = "A Record of Buddhistic Kingdoms";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Switch>
          <Route path="/" render={() => <HomePage title={title} />} exact />
          <Route path="/map" render={() => <MapPage title={title} />} />
          <Route path="/people" render={() => <PeoplePage title={title} />} />
          <Route path="/bibliography" render={() => <BibliographyPage title={title} />} />
          <Route path="/settings" render={() => <SettingsPage title={title} />} />
          <Route path="/about" render={() => <AboutPage title={title} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
