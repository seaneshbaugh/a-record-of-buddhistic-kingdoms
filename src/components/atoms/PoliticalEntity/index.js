import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class PoliticalEntity extends Component {
  render() {
    const className = classNames(this.props.className, styles.politicalEntity);

    return (
      <span className={className}>{
        this.props.link == null ?
          this.props.name : <a href={this.props.link.url} target="_blank" rel="noopener noreferrer" title={this.props.link.text}>{this.props.name}</a>
      }</span>
    );
  }
}

PoliticalEntity.propTypes = {
};

export default PoliticalEntity;
