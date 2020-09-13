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

import { validate } from "../../components/validator/validator";

import "../../styles/input.styles.scss";

const ForgotPassword = (props) => {
  const { handleSubmit, submitting } = props;

  const onSubmit = (props) => {
    console.log(props);
  };

  return (
    <div className="login-container">
      <Grid.Column
        style={{
          width: "300px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Segment style={{marginTop: '100px'}}>
        <Header as="h2" textAlign="center">
         Forgot Password?
        </Header>
          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Field
              fluid
              name="email"
              component={LabelInputField}
              label={{
                content: <Icon color="blue" name="mail" />,
              }}
              labelPosition="left"
              placeholder="Enter Email Here"
            />
            <Button color="gray" submitting={submitting} fluid size="large">
              Recover Password
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </div>
  );
};

export default reduxForm({
  form: "forgotPasswordForm", // a unique identifier for this form
  validate,
})(ForgotPassword);
