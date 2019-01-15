import React from "react";
import { storiesOf } from "@storybook/react";
import Footnote from "./index.js";
import chapter01 from "../../../data/book/chapter_01.json";

storiesOf("molecules/Footnote", module)
  .add("with paragraphs", () => (<Footnote index={1} paragraphs={chapter01.footnotes[0].paragraphs} />));
