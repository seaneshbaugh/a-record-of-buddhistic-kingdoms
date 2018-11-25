import React, { Component } from "react";
import Footnote from "./Book/Footnote";
import "./Annotations.css";

class Annotations extends Component {
  render() {
    const footnotes = this.props.footnotes.map((footnote, index) => {
      return (<Footnote {...footnote} index={index + 1} key={(index + 1).toString()} />);
    });

    return (
      <div className="annotations">
        <div className="annotations__footnotes">
          {footnotes}
        </div>
      </div>
    );
  }
}

export default Annotations;
