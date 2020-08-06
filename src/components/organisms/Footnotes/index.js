import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Footnote from "../../molecules/Footnote";
import styles from "./index.module.css";

class Footnotes extends Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);

    this.ref = React.createRef();
  }

  componentDidMount() {
    this.scrollToCurrentFootnote();
  }

  componentDidUpdate() {
    this.scrollToCurrentFootnote();
  }

  scrollToCurrentFootnote() {
    this.ref.current.scrollTo({ top: this.currentFootnoteRef.current.offsetTop, left: 0, behavior: "smooth" });
  }

  close(event) {
    event.preventDefault();

    this.props.setCurrentFootnote(null);
  }

  render() {
    const className = classNames(this.props.className, styles.footnotes);

    const footnotes = this.props.footnotes.map((footnote, index) => {
      const footnoteRef = React.createRef();

      if (index === this.props.currentFootnote) {
        this.currentFootnoteRef = footnoteRef;
      }

      return <Footnote {...footnote} index={index + 1} key={(index + 1).toString()} current={index === this.props.currentFootnote} ref={footnoteRef} />;
    });

    return (
      <div ref={this.ref} className={className}>
        <span className={styles.closeButton} onClick={this.close}>&times;</span>
        {footnotes}
      </div>
    );
  }
}

Footnotes.propTypes = {
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

export default Footnotes;
