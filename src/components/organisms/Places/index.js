import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { stringOrLanguageProps } from "../../../utils/common-prop-types";
import Place from "../../../containers/Place";
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

      const placeClassName = classNames(styles.place);

      return <Place {...place} index={index + 1} key={(index + 1).toString()} current={index === this.props.currentPlace} ref={placeRef} className={placeClassName} />;
    });

    return (
      <div ref={this.ref} className={className}>
        {places}
      </div>
    );
  }
}

Places.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      name: stringOrLanguageProps.isRequired
    })
  )
};

export default Places;
