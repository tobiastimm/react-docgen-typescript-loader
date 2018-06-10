import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import ComponentUsingEnum from "./ComponentUsingEnum";

storiesOf("Components", module).add(
  "ComponentUsingEnum",
  withInfo({ inline: true })(() => {
    //

    return <ComponentUsingEnum />;
  }),
);
