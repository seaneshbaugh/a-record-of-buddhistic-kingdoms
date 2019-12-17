import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./index.module.css";

class TwoColumnPageTemplate extends Component {
  render() {
    const header = React.cloneElement(this.props.header, { className: classNames(this.props.header.props.className, styles.header) });
    const sideContent = React.cloneElement(this.props.sideContent, { className: classNames(this.props.sideContent.props.className, styles.sideContent) });
    const mainContent = React.cloneElement(this.props.mainContent, { className: classNames(this.props.mainContent.props.className, styles.mainContent) });
    const footer = React.cloneElement(this.props.footer, { className: classNames(this.props.footer.props.className, styles.footer) });

    return (
      <div className={styles.twoColumnPageTemplate}>
        {header}
        {sideContent}
        {mainContent}
        {footer}
      </div>
    );
  }
}

TwoColumnPageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  sideContent: PropTypes.any.isRequired,
  mainContent: PropTypes.any.isRequired,
  footer: PropTypes.node.isRequired
};

export default TwoColumnPageTemplate;
