import React, { Component } from "react";
import Paragraph from "./Paragraph";
import styles from "./Footnote.module.css";

class Footnote extends Component {
  render() {
    const paragraphs = this.props.paragraphs.map((paragraph, index) => {
      return (<Paragraph {...paragraph} key={(index + 1).toString()} />);
    });

    return (
      <div className={styles.footnote}>
        <span className={styles.index}>[{this.props.index}]</span>
        {paragraphs}
      </div>
    );
  }
}

export default Footnote;
