import React, { Component } from "react";
import { connect } from "react-redux";
import PoliticalEntities from "../components/molecules/PoliticalEntities";
import { displayValue } from "../store/selectors";

class PoliticalEntitiesContainer extends Component {
  render() {
    const { className, politicalEntities } = this.props;

    return (
      <PoliticalEntities {...{ className, politicalEntities } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  politicalEntities: ownProps.politicalEntities.map((politicalEntity) => (
    {
      ...politicalEntity,
      name: displayValue(state.display, politicalEntity.name)
    }
  ))
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PoliticalEntitiesContainer);
