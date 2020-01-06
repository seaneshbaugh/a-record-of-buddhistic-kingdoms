import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Place from "../../molecules/Place";
import styles from "./index.module.css";

class Places extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  componentDidMount() {
    this.scrollToCurrentPlace();
  }

  componentDidUpdate() {
    this.scrollToCurrentPlace();
  }

  scrollToCurrentPlace() {
    this.ref.current.scrollTo({ top: this.currentPlaceRef.current.offsetTop, left: 0, behavior: "smooth" });
  }

  render() {
    const className = classNames(this.props.className, styles.places);

    const places = this.props.places.map((place, index) => {
      const placeRef = React.createRef();

      if (index === this.props.currentPlace) {
        this.currentPlaceRef = placeRef;
      }

      return <Place {...place} index={index + 1} key={(index + 1).toString()} current={index === this.props.currentPlace} ref={placeRef} />;
    });

    return (
      <div ref={this.ref} className={className}>
        {places}
      </div>
    );
  }
}

Places.propTypes = {
};

export default Places;
