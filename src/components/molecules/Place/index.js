import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class Place extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.props.setCurrentPlace(this.props.index);

    this.props.mapInstance.flyTo([this.props.lat, this.props.lng], 8);
  }

  render() {
    const className = classNames(this.props.className, styles.place, { [styles.current]: this.props.current });

    return (
      <div ref={this.props.forwardedRef} className={className} onClick={this.handleClick}>
        {this.props.name}
      </div>
    );
  }
}

Place.propTypes = {
  name: PropTypes.string.isRequired,
};

export default React.forwardRef((props, ref) => <Place forwardedRef={ref} {...props} />);
