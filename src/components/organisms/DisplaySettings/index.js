import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class DisplaySettings extends Component {
  render() {
    const className = classNames(this.props.className, styles.displaySettings);

    const languages = Object.entries(this.props.languageLabels).map(([language, label]) => {
      const checked = this.props.currentLanguage === language;

      const onChange = (event) => (this.props.setCurrentLanguage(language));

      return (
        <label key={language} htmlFor={`displaySettings${language}`} style={{ display: "block" }}>
          <input type="radio" value={language} name="displaySettings" id={`displaySettings${language}`} checked={checked} onChange={onChange} />
          &nbsp;
          {label}
        </label>
      );
    });

    return (
      <div className={className}>
        {languages}
      </div>
    );
  }
}

DisplaySettings.propTypes = {
};

export default DisplaySettings;
