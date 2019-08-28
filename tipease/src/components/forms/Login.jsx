import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { doSignIn } from "../../store/actions/authActions";
import CoffeeShopBg from '../CoffeeShopBg'

function LogFrm({ errors, touched }) {
  return (
    <CoffeeShopBg>
      <div className="form-card">
        <h1>Login</h1>
        <Form className="ui form">
          <div className="field">
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
            <Field type="text" name="email" placeholder="Email" />
          </div>
          <div className="field">
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}
            <Field type="password" name="password" placeholder="Password" />
          </div>
          <button className="ui button" type="submit" onClick={() => {}}>
            Login
          </button>
        </Form>
      </div>
    </CoffeeShopBg>
  );
}

const LoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("is required")
      .email("Email is not Valid"),
    password: Yup.string().required("Password is required")
  }),

  handleSubmit(values, formikBag) {
    formikBag.props.doSignIn(values).then(() => {
      formikBag.props.history.push("/");
      window.location.reload();
    });
  }
})(LogFrm);

export default connect(
  null,
  { doSignIn }
)(LoginForm);
