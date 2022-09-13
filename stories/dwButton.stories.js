import { html } from "lit-html";
import "@material/mwc-button";

export default {
  title: "Dreamworld/Button",
  component: "mwc-surface",
  argTypes: {},
};

const Template = ({
  label ,
  icon ,
  raised ,
  unelevated ,
  outlined ,
  dense ,
  disabled ,
  trailingIcon
}) =>
  html`<mwc-button
    .label=${label}
    .icon=${icon}
    ?raised=${raised}
    ?unelevated=${unelevated}
    ?outlined=${outlined}
    ?dense=${dense}
    ?disabled=${disabled}
  ></mwc-button>`;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  icon: "",
  raised: false,
  unelevated: false,
  outlined: true,
  dense: false,
  disabled: false
};
