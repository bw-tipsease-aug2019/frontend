import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { doCreateAccount } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

function RegFrm({ values, errors, touched }) {
    return (
    <div className="form-card">
      <h1>Create an Account</h1>
      <Form className="ui form">
        <div className="field">
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" />
        </div>
        <div className="field">
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
        </div>
        <div className="field">
            {touched.cPassword && errors.cPassword && <p>{errors.cPassword}</p>}
            <Field
              type="password"
              name="cPassword"
              placeholder="Confirm Password"
            />
        </div>
        <div className="field">
          <label htmlFor="isServiceWorker">
            Check if you are a service worker
            {touched.isServiceWorker && errors.isServiceWorker && <p>{errors.isServiceWorker}</p>}
            <Field type="checkbox" name="isServiceWorker" checked={values.isServiceWorker} />
          </label>
        </div>
        {/* disabled={isSubmitting}  ***Removed from submit button for testing***/}
        <button className="ui button" type="submit">
          Submit
        </button>
        <button className="ui button" type="reset">
          Reset Form
        </button>
      </Form>
    </div>
  );
}

const RegistrationForm = withFormik({
  mapPropsToValues({ email, password, cPassword, isServiceWorker }) {
    return {
      email: email || "",
      password: password || "",
      cPassword: '' || "",
      isServiceWorker: isServiceWorker || false
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("is not valid")
      .required("is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("is required")
      ,
    cPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match!"
    )
  }),

  handleSubmit(values, formikBag) {
   
    formikBag.props.doCreateAccount(values)
    .then(() => {formikBag.props.props.history.push("/login")});
   console.log(values);

 
  }
})(RegFrm);

export default connect(
  null,
  { doCreateAccount }
)(RegistrationForm);
