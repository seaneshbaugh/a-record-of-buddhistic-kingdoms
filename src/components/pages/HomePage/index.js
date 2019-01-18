import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTemplate from "../../templates/PageTemplate";
import Header from "../../organisms/Header";
import Map from "../../organisms/Map";
import Book from "../../organisms/Book";
import Annotations from "../../organisms/Annotations";
import Footer from "../../organisms/Footer";
import styles from "./index.module.css";

class HomePage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={this.props.subtitle} />;
    const content = <div className={styles.body}>
                     <Map />
                     <Book {...this.props.book} currentChapter={this.props.currentChapter} />
                     <Annotations footnotes={this.props.book.chapters[this.props.currentChapter].footnotes} />
                     </div>;
    const footer = <Footer>TODO: Footer content goes here.</Footer>;

    return (
      <PageTemplate
        header={header}
        content={content}
        footer={footer}
      />
    );
  }
}

HomePage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default HomePage;
