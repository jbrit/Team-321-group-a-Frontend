import React from "react";

import { Field, reduxForm } from "redux-form";

import { Form } from "semantic-ui-react";

import { LabelInputField } from "react-semantic-redux-form";

import { validate } from "../validator/validator";

import { Link } from "react-router-dom";

const SignInForm = (props) => {
  const { handleSubmit, history } = props;

  const onSubmit = (props) => {
    history.push("/home");
  };

  return (
    <div className="FormCenter">
      <div className="FormFields">
        <Form
          className="FormFields"
          size="large"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="FormField">
            <Field
              fluid
              name="email"
              component={LabelInputField}
              placeholder="E-Mail Address"
            />
          </div>
          <div className="FormField">
            <Field
              fluid
              name="password"
              component={LabelInputField}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>{" "}
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "SignInForm", // a unique identifier for this form
  validate,
})(SignInForm);
