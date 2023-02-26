import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import LinkOrText from "../../atoms/LinkOrText";
import styles from "./index.module.css";

class Destination extends Component {
  render() {
    if (!this.props.name) {
      return null;
    }

    const className = classNames(this.props.className, styles.place);

    // TODO: Consider just displaying the name as text and then adding links afterwards.
    // For now just making the name be a link to the first link is fine.
    const url = (() => {
      if (this.props.links && this.props.links[0]) {
        return this.props.links[0].url;
      } else {
        return null;
      }
    })();

    return (
      <span className={className}><LinkOrText text={this.props.name} url={url} /></span>
    );
  }
}

Destination.propTypes = {
  name: PropTypes.string
};

export default Destination;
