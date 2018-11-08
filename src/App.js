import React, { Component } from "react";
import Header from "./App/Header";
import Map from "./App/Map";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <Map />
      </div>
    );
  }
}

export default App;
