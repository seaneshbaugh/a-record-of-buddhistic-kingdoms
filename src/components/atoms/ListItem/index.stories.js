import React from "react";
import { storiesOf } from "@storybook/react";
import ListItem from "./index.js";

storiesOf("atoms/ListItem", module)
  .add("with text", () => (<ListItem text="This is a list item" />));
