import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { linkProps } from "../../../utils/common-prop-types";
import styles from "./index.module.css";

class Person extends Component {
  render() {
    const className = classNames(this.props.className, styles.person);

    // TODO: Figure out how to style the links. Maybe the default list style is okay?
    const links = (this.props.links || []).map((link, index) => (<li key={index + 1}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a></li>));

    // TODO: Move this to its own component.
    const nonRomanizedName = this.props.nonRomanizedName ? Object.keys(this.props.nonRomanizedName).map((language) => this.props.nonRomanizedName[language]) : [];

    return (
      <div className={className}>
        <h2 className={styles.name}>
          {this.props.name}
          {nonRomanizedName.length > 0 &&
           <>
             <br></br>
             <span className={styles.nonRomanized}>{nonRomanizedName.join(", ")}</span>
           </>
          }
        </h2>
        <h3 className={styles.title}>{this.props.title}</h3>
        <p className={styles.appearance}>First Appearance: {this.props.appearance}</p>
        {this.props.biography && <p className={styles.biography}>{this.props.biography}</p>}
        {links.length > 0 &&
         <>
           <h4>External Links</h4>
           <ul>{links}</ul>
         </>
        }
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  appearance: PropTypes.string.isRequired,
  biography: PropTypes.string,
  links: PropTypes.arrayOf(linkProps)
};

export default Person;
