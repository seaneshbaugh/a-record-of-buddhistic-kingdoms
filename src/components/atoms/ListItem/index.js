import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const className = classNames(this.props.className, styles.listItem);

    return (
      <li className={className} ref={this.props.forwardedRef} onClick={this.handleClick}>
        {this.props.text}
      </li>
    );
  }
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default React.forwardRef((props, ref) => <ListItem forwardedRef={ref} {...props} />);
