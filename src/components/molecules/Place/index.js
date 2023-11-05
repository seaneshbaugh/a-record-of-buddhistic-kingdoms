import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Destination from "../../../containers/Destination";
import PoliticalEntities from "../../../containers/PoliticalEntities";
import styles from "./index.module.css";

class Place extends Component {
  render() {
    const className = classNames(this.props.className, styles.place);

    return (
      <div ref={this.props.forwardedRef} className={className}>
        <h1>{this.props.name}</h1>
        <h3 className={styles.politicalEntityHeader}>5th Century Location:</h3>
        <PoliticalEntities politicalEntities={this.props.ancientPoliticalEntities} />
        <h3 className={styles.politicalEntityHeader}>19th Century Location:</h3>
        <PoliticalEntities politicalEntities={this.props.leggePoliticalEntities} />
        <h3 className={styles.politicalEntityHeader}>21st Century Location:</h3>
        <PoliticalEntities politicalEntities={this.props.modernPoliticalEntities} />
        {this.props.ancientDestination &&
          <>
            <h3 className={styles.politicalEntityHeader}>5th Century Destination:</h3>
            <Destination {...this.props.ancientDestination} />
          </>
        }
        {this.props.modernDestination &&
          <>
            <h3 className={styles.politicalEntityHeader}>21st Century Destination:</h3>
            <Destination {...this.props.modernDestination} />
          </>
        }
        {this.props.reference?.text &&
          <p>
            <strong>Appearance:</strong> <span className={styles.appearance}>{this.props.reference.text}</span>
          </p>
        }
      </div>
    );
  }
}

Place.propTypes = {
  // place: PropTypes.any.isRequired
};

export default React.forwardRef((props, ref) => <Place forwardedRef={ref} {...props} />);
