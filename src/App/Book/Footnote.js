import React, { Component } from "react";
import Paragraph from "./Paragraph";
import "./Footnote.css";

class Footnote extends Component {
  render() {
    const paragraphs = this.props.paragraphs.map((paragraph, index) => {
      return (<Paragraph {...paragraph} key={(index + 1).toString()} />);
    });

    return (
      <div className="footnote">
        {paragraphs}
      </div>
    );
  }
}

export default Footnote;
