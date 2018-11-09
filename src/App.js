import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./App/Header";
import Map from "./App/Map";
import Book from "./App/Book";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <Map />
        <Book {...this.props.book} />
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
