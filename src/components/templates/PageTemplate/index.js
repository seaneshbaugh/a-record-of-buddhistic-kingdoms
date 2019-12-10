import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Footer from "../../organisms/Footer";
import styles from "./index.module.css";

const defaultFooter = <Footer className={styles.footer}>
      <p className="copyright">The translation of Faxian&lsquo;s &ldquo;A Record of Buddhistic Kingdoms&rdquo; by James Legge found here is free of known copyright restrictions. All other content on this website is licensed under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>. The <a href="https://github.com/seaneshbaugh/a-record-of-buddhistic-kingdoms" target="_blank">source code</a> for this website is available under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.</p>
                      </Footer>;

class PageTemplate extends Component {
  render() {
    const header = React.cloneElement(this.props.header, { className: classNames(this.props.header.props.className, styles.header) });
    const content = React.cloneElement(this.props.content, { className: classNames(this.props.content.props.className, styles.content) });
    const footer = this.props.footer ? React.cloneElement(this.props.footer, { className: classNames(this.props.footer.props.className, styles.footer) }) : defaultFooter;

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
  footer: PropTypes.node
};

export default PageTemplate;
