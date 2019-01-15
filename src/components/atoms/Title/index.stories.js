import React from "react";
import { storiesOf } from "@storybook/react";
import Title from "./index.js";

storiesOf("atoms/Title", module)
  .add("with text", () => (<Title text="This is a title" />))
  .add("with children", () => (<Title>This is a title with <a href="https://duckduckgo.com" target="_blank">children</a></Title>));
