import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import PoliticalEntity from "../../atoms/PoliticalEntity";
import styles from "./index.module.css";

class PoliticalEntities extends Component {
  render() {
    const className = classNames(this.props.className, styles.politicalEntities);

    const politicalEntities = this.props.politicalEntities.map((politicalEntity, index) => (
      <PoliticalEntity {...politicalEntity} key={(index + 1).toString()} />
    )).reduce((memo, politicalEntity, index) => {
      memo.push(politicalEntity);

      if (index !== this.props.politicalEntities.length - 1) {
        memo.push(", ");
      }

      return memo;
    }, []);

    return (
      <div className={className}>
        {politicalEntities}
      </div>
    );
  }
}

PoliticalEntities.propTypes = {
};

export default PoliticalEntities;
