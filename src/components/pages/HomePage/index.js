import React, { Component } from "react";
import PropTypes from "prop-types";
import TwoColumnPageTemplate from "../../templates/TwoColumnPageTemplate";
import ThreeColumnPageTemplate from "../../templates/ThreeColumnPageTemplate";
import Header from "../../organisms/Header";
import PageFooter from "../partials/PageFooter";
import TableOfContents from "../../../containers/TableOfContents";
import Book from "../../../containers/Book";
import Footnotes from "../../../containers/Footnotes";
import styles from "./index.module.css";

const subtitle = "Being an Account by the Chinese Monk Faxian of his Travels in India and Ceylon in Search of the Buddhist Books of Discipline";

class HomePage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={subtitle} />;
    const tableOfContents = <TableOfContents className={styles.tableOfContents} />;
    const book = <Book className={styles.book} />;

    let template;

    if (this.props.currentFootnote || this.props.currentFootnote === 0) {
      const footnotes = <Footnotes />;

      template = <ThreeColumnPageTemplate header={header} leftContent={tableOfContents} centerContent={book} rightContent={footnotes} footer={PageFooter} />;
    } else {
      template = <TwoColumnPageTemplate header={header} sideContent={tableOfContents} mainContent={book} footer={PageFooter} />;
    }

    return template;
  }
}

HomePage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  currentFootnote: PropTypes.number
};

export default HomePage;
