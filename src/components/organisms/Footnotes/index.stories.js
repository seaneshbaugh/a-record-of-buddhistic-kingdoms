import React from "react";
import { storiesOf } from "@storybook/react";
import Annotations from "./index.js";
import chapter01 from "../../../data/book/chapter_01.json";

storiesOf("organisms/Annotations", module)
  .add("with footnotes", () => (<Annotations footnotes={chapter01.footnotes} />));
