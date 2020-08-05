import React, { Component } from "react";
import { connect } from "react-redux";
import People from "../components/organisms/People";
import { peopleSetCurrentPerson } from "../store/actions";
import { peopleCurrentPerson, displayValue } from "../store/selectors";

class PeopleContainer extends Component {
  render() {
    const { className, people, currentPerson, setCurrentPerson } = this.props;

    return (
      <People {...{ className, people, currentPerson, setCurrentPerson } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  people: state.people.people.map((person) => ({
    ...person,
    name: displayValue(state.display, person.name),
    title: displayValue(state.display, person.title)
  })),
  currentPerson: peopleCurrentPerson(state.people)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentPerson: (newPersonIndex) => {
    return dispatch(peopleSetCurrentPerson(newPersonIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
