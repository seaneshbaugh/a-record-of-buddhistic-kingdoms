import React from "react";
import { storiesOf } from "@storybook/react";
import Book from "./index.js";
import chapter01 from "../../../data/book/chapter_01.json";
import chapter02 from "../../../data/book/chapter_02.json";

const chapters = [chapter01, chapter02];

storiesOf("organisms/Book", module)
  .add("with chapters", () => (<Book chapters={chapters} currentChapter={0} />));
