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

const ForgotPassword = (props) => {
  const { handleSubmit, submitting } = props;

  const onSubmit = (props) => {
    console.log(props);
  };

  return (
    <Grid centered columns={2}>
      <Grid.Column>
       
        <Segment style={{marginTop: '100px'}}>
        <Header as="h2" textAlign="center">
         Forgot Password?
        </Header>
          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Field
              fluid
              name="email"
              component={LabelInputField}
              placeholder="Enter Email Here"
            />
            <div align="center">
            <button className="FormField__Button mr-20">Recover Password</button>{" "}
            </div>
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
