import React from "react";
import { storiesOf } from "@storybook/react";
import Subtitle from "./index.js";

storiesOf("atoms/Subtitle", module)
  .add("with text", () => (<Subtitle text="This is a subtitle" />))
  .add("with children", () => (<Subtitle>This is a subtitle with <a href="https://duckduckgo.com" target="_blank">children</a></Subtitle>));
