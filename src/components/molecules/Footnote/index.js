import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Paragraph from "../../molecules/Paragraph";
import styles from "./index.module.css";

class Footnote extends Component {
  render() {
    const className = classNames(styles.footnote, { [styles.current]: this.props.current });

    const paragraphs = this.props.paragraphs.map((paragraph, index) => {
      return (<Paragraph {...paragraph} key={(index + 1).toString()} />);
    });

    return (
      <div ref={this.props.forwardedRef} className={className}>
        <span className={styles.index}>[{this.props.index}]</span>
        {paragraphs}
      </div>
    );
  }
}

Footnote.propTypes = {
  paragraphs: PropTypes.arrayOf(
    PropTypes.shape({
      sentences: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  ).isRequired,
  current: PropTypes.bool.isRequired
};

export default React.forwardRef((props, ref) => <Footnote forwardedRef={ref} {...props} />);
