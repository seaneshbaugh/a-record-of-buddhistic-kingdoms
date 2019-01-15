import React from "react";
import { storiesOf } from "@storybook/react";
import Chapter from "./index.js";
import chapter01 from "../../../data/book/chapter_01.json";

storiesOf("molecules/Chapter", module)
  .add("with paragraphs", () => (<Chapter title={chapter01.title} subtitle={chapter01.subtitle} content={chapter01.content} />));
