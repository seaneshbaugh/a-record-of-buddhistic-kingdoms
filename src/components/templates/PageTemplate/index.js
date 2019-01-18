import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./index.module.css";

class PageTemplate extends Component {
  render() {
    const header = React.cloneElement(this.props.header, { className: classNames(this.props.header.props.className, styles.header) });
    const content = React.cloneElement(this.props.content, { className: classNames(this.props.header.props.className, styles.content) });
    const footer = React.cloneElement(this.props.footer, { className: classNames(this.props.footer.props.className, styles.content) });

    return (
      <div className={styles.pageTemplate}>
        {header}
        {content}
        {footer}
      </div>
    );
  }
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  content: PropTypes.any.isRequired,
  footer: PropTypes.node.isRequired
};

export default PageTemplate;
