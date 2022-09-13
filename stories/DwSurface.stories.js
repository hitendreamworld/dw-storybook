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
  },
};

const Template = ({ elevation }) =>
  html`<dw-surface .elevation=${elevation}>Elevation: ${elevation}</dw-surface>`;

export const Default = Template.bind({});
Default.args = {
  elevation: 2,
};
