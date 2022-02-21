import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<HomePage title={title} />} exact />
          <Route path="/map" element={<MapPage title={title} />} />
          <Route path="/people" element={<PeoplePage title={title} />} />
          <Route path="/bibliography" element={<BibliographyPage title={title} />} />
          <Route path="/settings" element={<SettingsPage title={title} />} />
          <Route path="/about" element={<AboutPage title={title} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
