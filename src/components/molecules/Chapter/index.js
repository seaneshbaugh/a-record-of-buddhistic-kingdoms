import React, { Component } from "react";
import Paragraph from "../../molecules/Paragraph";
import styles from "./index.module.css";

class Chapter extends Component {
  render() {
    const paragraphs = this.props.content.paragraphs.map((paragraph, index) => {
      return (<Paragraph {...paragraph} key={(index + 1).toString()} />);
    });

    return (
      <div className={styles.chapter}>
        <h1 className={styles.title}>{this.props.title}</h1>
        <h2 className={styles.subtitle}>{this.props.subtitle}</h2>
        <div className={styles.contents}>
          {paragraphs}
        </div>
      </div>
    );
  }
}

export default Chapter;
