import type { Meta, StoryFn } from "@storybook/react-vite";
import { Form, Formik } from "formik";
import { FormikInput } from "./formik-input";

export default {
  title: "FormikPrime/FormikInput",
  component: FormikInput,
} as Meta<typeof FormikInput>;

const Template: StoryFn<typeof FormikInput> = (args) => (
  <Formik initialValues={{ [args.id]: "" }} onSubmit={() => {}}>
    <Form>
      <FormikInput {...args} />
    </Form>
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  id: "name",
  label: "Name",
  placeholder: "Enter a name",
};

export const FloatLabel = Template.bind({});
FloatLabel.args = {
  id: "floating",
  label: "Floating Label",
  floatLabel: true,
};
