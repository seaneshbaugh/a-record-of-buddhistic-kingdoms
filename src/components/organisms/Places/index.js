import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { stringOrLanguageProps } from "../../../utils/common-prop-types";
import ListItem from "../../atoms/ListItem";
import Place from "../../../containers/Place";
import styles from "./index.module.css";

class Places extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  componentDidMount() {
    // this.scrollToCurrentPlace();
  }

  componentDidUpdate() {
    // this.scrollToCurrentPlace();
  }

  scrollToCurrentPlace() {
    this.ref.current.scrollTo({ top: this.currentPlaceRef.current.offsetTop, left: 0, behavior: "smooth" });
  }

  render() {
    const className = classNames(this.props.className, styles.places);

    const places = this.props.places.map((place, index) => {
      const placeOnClick = () => {
        this.props.setCurrentPlace(index);

        this.props.mapInstance.flyTo([place.position.lat, place.position.lng], 8);
      };

      const placeRef = React.createRef();

      if (index === this.props.currentPlace) {
        this.currentPlaceRef = placeRef;
      }

      const placeClassName = classNames(styles.place, { [styles.active]: index === this.props.currentPlace });

      return <ListItem text={place.name} onClick={placeOnClick} key={(index + 1).toString()} ref={placeRef} className={placeClassName} />;
    });

    return (
      <ul ref={this.ref} className={className}>
        {places}
      </ul>
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
