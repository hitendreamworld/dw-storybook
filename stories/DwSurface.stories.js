import { html } from "lit-html";
import "@dreamworld/dw-surface";

export default {
  title: "Dreamworld/Surface",
  component: "dw-surface",
  argTypes: {
    elevation: {
      control: "select",
      options: [0, 1, 2, 4, 8, 16, 24],
    },
    bg: {
      control: "select",
      options: ["surface", "primary", "secondary", "error"],
    },
  },
};

const Template = ({
  bg = "",
  elevation = 0,
  transparent = false,
  interactive = false,
  selected = false,
  activated = false,
}) =>
  html`<dw-surface
    .bg="${bg},"
    ?transparent=${transparent}
    ?interactive=${interactive}
    ?selected=${selected}
    ?activated=${activated}
    .elevation=${elevation}
    style="height: 100px; display: flex; justify-content: center; align-items: center"
    >Elevation: ${elevation}</dw-surface
  >`;

export const Default = Template.bind({});
Default.args = {
  elevation: 16,
  transparent: false,
  interactive: false,
  selected: false,
  activated: false,
};
