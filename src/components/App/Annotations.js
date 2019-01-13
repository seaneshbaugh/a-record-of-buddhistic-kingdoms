import React, { Component } from "react";
import Footnote from "./Book/Footnote";
import styles from "./Annotations.module.css";

class Annotations extends Component {
  render() {
    const footnotes = this.props.footnotes.map((footnote, index) => {
      return (<Footnote {...footnote} index={index + 1} key={(index + 1).toString()} />);
    });

    return (
      <div className={styles.annotations}>
        <div className={styles.footnotes}>
          {footnotes}
        </div>
      </div>
    );
  }
}

export default Annotations;
