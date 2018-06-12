import React, { CSSProperties } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { PrimaryButton } from "./Button";
import { ThemeProvider } from "../../themed-components";
import theme from "../../theme";

const stories = storiesOf("Components", module);

stories.add(
  "PrimaryButton",
  withInfo({ inline: true })(() => (
    <div style={styles.container}>
      <div style={styles.firstCellContainer}>
        <ThemeProvider theme={theme}>
          <PrimaryButton text="Hit me" />
        </ThemeProvider>
      </div>
    </div>
  )),
);

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
  },
  cellContainer: {
    width: 100,
    height: 100,
    backgroundColor: "rgb(72, 78, 104)",
  },
};
