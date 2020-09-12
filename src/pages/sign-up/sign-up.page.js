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

import { validate } from "../validator";

import { Link } from "react-router-dom";

const SignUp = (props) => {
  const { handleSubmit, submitting } = props;

  const onSubmit = (props) => {
    console.log(props);
  };

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          Register
        </Header>
        <Segment>
          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
          <Field
              fluid
              name="fullname"
              component={LabelInputField}
              label={{
                content: <Icon color="blue" name="user"  />,
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
                content: <Icon color="blue" name="phone"  />,
              }}
              labelPosition="left"
              placeholder="Phone number"
            />
            <Field
              fluid
              name="email"
              component={LabelInputField}
              label={{
                content: <Icon color="blue" name="mail"  />,
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
                content: <Icon color="blue" name="lock"  />,
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

            <Message>
              Already registered?<Link to="/">Sign In</Link>
            </Message>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default reduxForm({
  form: "signInForm", // a unique identifier for this form
  validate,
})(SignUp);
