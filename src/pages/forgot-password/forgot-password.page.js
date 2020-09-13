import React from "react";

import { Field, reduxForm } from "redux-form";

import {
  Form,
  Icon,
  Button,
  Grid,
  Segment,
  Header,
} from "semantic-ui-react";

import { LabelInputField } from "react-semantic-redux-form";

import { validate } from "../validator";

import './forgot-password.styles.scss';

const ForgotPassword = (props) => {
  const { handleSubmit, submitting } = props;

  const onSubmit = (props) => {
    console.log(props);
  };

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
         Forgot Password?
        </Header>
        <Segment>
          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Field
              fluid
              name="email"
              component={LabelInputField}
              label={{
                content: <Icon color="blue" name="mail" size="large" />,
              }}
              labelPosition="left"
              placeholder="Enter Email Here"
            />
            <Button color="blue" submitting={submitting} fluid size="large">
              Recover Password
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default reduxForm({
  form: "forgotPasswordForm", // a unique identifier for this form
  validate,
})(ForgotPassword);
