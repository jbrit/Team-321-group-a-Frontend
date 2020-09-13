import React from "react";

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

const SignUp = (props) => {
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
        <Header as="h2">Create a Secure Account</Header>
        <label>Welcome to the future of Wealth & Health </label>
        <Segment>
          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Field
              fluid
              name="fullname"
              component={LabelInputField}
              label={{
                content: <Icon color="blue" name="user" />,
              }}
              labelPosition="left"
              placeholder="Fullname"
            />
            <Field
              fluid
              name="phone"
              component={LabelInputField}
              type="text"
              label={{
                content: <Icon color="blue" name="phone" />,
              }}
              labelPosition="left"
              placeholder="Phone number"
            />
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
              Sign up
            </Button>
          </Form>
        </Segment>
        <Message>
          Already registered?<Link to="/">Sign In</Link>
        </Message>
      </Grid.Column>
    </div>
  );
};

export default reduxForm({
  form: "signInForm", // a unique identifier for this form
  validate,
})(SignUp);
