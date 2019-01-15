import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./index.js";

storiesOf("organisms/Header", module)
  .add("with title and subtitle", () => (<Header title="This is a title" subtitle="This is a subtitle" />));
