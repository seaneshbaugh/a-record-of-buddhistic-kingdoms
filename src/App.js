import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./App/Header";
import Map from "./App/Map";
import Book from "./App/Book";
import Annotations from "./App/Annotations";
import Footer from "./App/Footer";
import "./App.css";

const defaultState = {
  currentChapter: 0
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  render() {
    return (
      <div className="app">
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <div className="app__body">
          <Map />
          <Book {...this.props.book} currentChapter={this.state.currentChapter} />
          <Annotations footnotes={this.props.book.chapters[this.state.currentChapter].footnotes} />
        </div>
        <Footer></Footer>
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
