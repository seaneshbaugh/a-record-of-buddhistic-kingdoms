import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTemplate from "../../templates/PageTemplate";
import Header from "../../organisms/Header";
import Map from "../../organisms/Map";
import TableOfContents from "../../../containers/TableOfContents";
import Book from "../../../containers/Book";
import Annotations from "../../../containers/Annotations";
import styles from "./index.module.css";

const subtitle = "Being an Account by the Chinese Monk Faxian of his Travels in India and Ceylon in Search of the Buddhist Books of Discipline";

class HomePage extends Component {
  render() {
    const header = <Header title={this.props.title} subtitle={subtitle} />;
    const content = <main className={styles.content}>
                      <TableOfContents className={styles.tableOfContents} />
                      <Book className={styles.book} />
                    </main>;

    return (
      <PageTemplate
        header={header}
        content={content}
      />
    );
  }
}

HomePage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default HomePage;
