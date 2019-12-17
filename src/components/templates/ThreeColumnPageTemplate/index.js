import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./index.module.css";

class ThreeColumnPageTemplate extends Component {
  render() {
    const header = React.cloneElement(this.props.header, { className: classNames(this.props.header.props.className, styles.header) });
    const leftContent = React.cloneElement(this.props.leftContent, { className: classNames(this.props.leftContent.props.className, styles.leftContent) });
    const centerContent = React.cloneElement(this.props.centerContent, { className: classNames(this.props.centerContent.props.className, styles.centerContent) });
    const rightContent = React.cloneElement(this.props.rightContent, { className: classNames(this.props.rightContent.props.className, styles.rightContent) });
    const footer = React.cloneElement(this.props.footer, { className: classNames(this.props.footer.props.className, styles.footer) });

    return (
      <div className={styles.threeColumnPageTemplate}>
        {header}
        {leftContent}
        {centerContent}
        {rightContent}
        {footer}
      </div>
    );
  }
}

ThreeColumnPageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  leftContent: PropTypes.any.isRequired,
  centerContent: PropTypes.any.isRequired,
  rightContent: PropTypes.any.isRequired,
  footer: PropTypes.node.isRequired
};

export default ThreeColumnPageTemplate;
