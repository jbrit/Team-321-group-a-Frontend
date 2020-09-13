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

import { validate } from "../../components/validator/validator";

import { Link } from "react-router-dom";

import "../../styles/input.styles.scss";

const SignIn = (props) => {
  const [error, setError] = useState(null);

  const { handleSubmit, submitting, history } = props;

  const onSubmit = (props) => {
    setError(true);
    history.push("/home");
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
        <Header as="h2">Sign in </Header>
        <label>Securely login to your DocBook </label>
        <Segment>
          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Field
              fluid
              name="email"
              component={LabelInputField}
              label={{
                content: <Icon color="blue" name="mail" />,
              }}
              labelPosition="left"
              placeholder="Email"
            />

            <Link to="/forgotpass" className="forgot-password">
              Forgot password?
            </Link>
            <Field
              fluid
              name="password"
              component={LabelInputField}
              type="password"
              label={{
                content: <Icon color="blue" name="lock" />,
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
            <Button color="gray" submitting={submitting} fluid size="large">
              Login
            </Button>
          </Form>
        </Segment>
        {error ? (
          <Message>
            Forgot Password?<Link to="/signup">Sign Up</Link>
          </Message>
        ) : (
          <Message>
            Not registered yet?<Link to="/signup">Sign Up</Link>
          </Message>
        )}
      </Grid.Column>
    </div>
  );
};

export default reduxForm({
  form: "signInForm", // a unique identifier for this form
  validate,
})(SignIn);
