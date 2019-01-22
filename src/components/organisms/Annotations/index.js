import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Footnote from "../../molecules/Footnote";
import styles from "./index.module.css";

class Annotations extends Component {
  render() {
    const className = classNames(this.props.className, styles.annotations);

    const footnotes = this.props.footnotes.map((footnote, index) => {
      return (<Footnote {...footnote} index={index + 1} key={(index + 1).toString()} />);
    });

    return (
      <div className={className}>
        <div className={styles.footnotes}>
          {footnotes}
        </div>
      </div>
    );
  }
}

Annotations.propTypes = {
  footnotes: PropTypes.arrayOf(
    PropTypes.shape({
      paragraphs: PropTypes.arrayOf(
        PropTypes.shape({
          sentences: PropTypes.arrayOf(PropTypes.string).isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
};

export default Annotations;
