import React, { Component } from "react";
import Paragraph from "./Paragraph";
import "./Chapter.css";

class Chapter extends Component {
  render() {
    const paragraphs = this.props.content.paragraphs.map((paragraph, index) => {
      return (<Paragraph {...paragraph} key={(index + 1).toString()} />);
    });

    return (
      <div className="chapter">
        <h1 className="chapter__title">{this.props.title}</h1>
        <h2 className="chapter__subtitle">{this.props.subtitle}</h2>
        <div className="chapter__contents">
          {paragraphs}
        </div>
      </div>
    );
  }
}

export default Chapter;
