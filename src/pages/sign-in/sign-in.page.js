import React, { useState } from "react";

import { Field, reduxForm } from "redux-form";

import {
  Form,
  Icon,
  Button,
  Grid,
  Segment,
  Message,
  Header,
} from "semantic-ui-react";

import { LabelInputField, CheckboxField } from "react-semantic-redux-form";

import { validate } from "../validator";

import { Link } from "react-router-dom";

const SignIn = (props) => {
  const [error, setError] = useState(null);

  const { handleSubmit, submitting, history } = props;

  const onSubmit = (props) => {
    setError(true);
    history.push('/home');
  };

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          Login
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
              placeholder="Email"
            />
            <Field
              fluid
              name="password"
              component={LabelInputField}
              type="password"
              label={{
                content: <Icon color="blue" name="lock" size="large" />,
              }}
              labelPosition="left"
              placeholder="Password"
            />
            <Form.Group>
              <Field
                name="remember"
                component={CheckboxField}
                label="Stay sign in"
              />
            </Form.Group>
            <Button color="blue" submitting={submitting} fluid size="large">
              Login
            </Button>

            {error ? (
              <Message>
                Forgot Password?<Link to="/signup">Sign Up</Link>
              </Message>
            ) : (
              <Message>
                Not registered yet?<Link to="/signup">Sign Up</Link>
              </Message>
            )}
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default reduxForm({
  form: "signInForm", // a unique identifier for this form
  validate,
})(SignIn);
