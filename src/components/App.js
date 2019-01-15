import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./organisms/Header";
import Map from "./organisms/Map";
import Book from "./organisms/Book";
import Annotations from "./organisms/Annotations";
import Footer from "./organisms/Footer";
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
    return (
      <div className={styles.app}>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <div className={styles.body}>
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