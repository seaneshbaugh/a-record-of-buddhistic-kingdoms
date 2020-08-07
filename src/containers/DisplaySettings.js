import React, { Component } from "react";
import { connect } from "react-redux";
import DisplaySettings from "../components/organisms/DisplaySettings";
import { displaySetCurrentLanguage } from "../store/actions";
import { languageLabels, displayCurrentLanguage } from "../store/selectors";

class DisplaySettingsContainer extends Component {
  render() {
    const { className, languageLabels, currentLanguage, setCurrentLanguage } = this.props;

    return (
      <DisplaySettings {...{ className, languageLabels, currentLanguage, setCurrentLanguage } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  languageLabels: languageLabels,
  currentLanguage: displayCurrentLanguage(state.display)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentLanguage: (newLanguage) => {
    return dispatch(displaySetCurrentLanguage(newLanguage));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySettingsContainer);
