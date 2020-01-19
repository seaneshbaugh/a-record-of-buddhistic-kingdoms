import React, { Component } from "react";
import { connect } from "react-redux";
import People from "../components/organisms/People";
import { displayValue } from "../store/selectors";

class PeopleContainer extends Component {
  render() {
    const { className, people } = this.props;

    return (
      <People {...{ className, people } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  people: ownProps.people.map((person) => (
    {
      ...person,
      name: displayValue(state.display, person.name),
      title: displayValue(state.display, person.title)
    }
  ))
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
