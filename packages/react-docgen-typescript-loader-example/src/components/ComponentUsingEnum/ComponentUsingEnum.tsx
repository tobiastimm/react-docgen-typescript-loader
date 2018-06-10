import * as React from "react";
import { Color } from "./Color";

interface Props {
  /** The color */
  color?: Color;
}

const ComponentUsingEnum: React.SFC<Props> = _props => {
  return <span>"test"</span>;
};

export default ComponentUsingEnum;
