import React, { Component } from "react";
import { connect } from "react-redux";
import PeoplePage from "../components/pages/PeoplePage";
import { peopleCurrentPerson } from "../store/selectors";

class PeoplePageContainer extends Component {
  render() {
    const { className, currentPerson } = this.props;

    return (
      <PeoplePage {...{ className, currentPerson } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentPerson: state.people.people[peopleCurrentPerson(state.people)]
});

const mapDispatchToProps = (state, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePageContainer);
