import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class Place extends Component {
  render() {
    const className = classNames(this.props.className, styles.place);

    return (
      <div ref={this.props.forwardedRef} className={className}>
        {this.props.name}
      </div>
    );
  }
}

Place.propTypes = {
  name: PropTypes.string.isRequired,
};

export default React.forwardRef((props, ref) => <Place forwardedRef={ref} {...props} />);
