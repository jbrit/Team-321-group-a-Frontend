import React from "react";

import { Field, reduxForm } from "redux-form";

import { Form } from "semantic-ui-react";

import { LabelInputField, CheckboxField } from "react-semantic-redux-form";

import { validate } from "../validator/validator";

import { Link } from "react-router-dom";

const SignUpForm = (props) => {
  const { handleSubmit, history } = props;

  const onSubmit = (props) => {
    history.push("/home");
    console.log(props);
  };

  return (
    <div className="FormCenter">
      <div className="FormFields">
        <Form size="large" onSubmit={handleSubmit(onSubmit)}>
          <div className="FormField">
            <Field
              fluid
              name="fullname"
              component={LabelInputField}
              type="text"
              placeholder="Enter your full name"
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
            <Field
              fluid
              name="email"
              component={LabelInputField}
              placeholder="E-Mail Address"
              type='email'
            />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <Field name="hasAgreed" component={CheckboxField} />I agree all
              statements in{" "}
              <Link to="" className="FormField__TermsLink">
                terms of service
              </Link>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "SignUpForm", // a unique identifier for this form
  validate,
})(SignUpForm);
