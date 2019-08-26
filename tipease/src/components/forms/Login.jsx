import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { doSignIn } from "../../actions/authActions";

function LogFrm({ errors, touched }) {
  const token = localStorage.getItem("token");
  return (
    <div className="form-card">
      <h1>Login</h1>
      <Form className="ui form">
        <div className="field">
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field type="email" name="email" placeholder="Email" />
        </div>

        <div className="field">
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>
        <button className="ui button" type="submit" onClick={() => {}}>
          Login
        </button>
      </Form>
    </div>
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
    email: Yup.string().required("is required")
    .email("Email is not Valid"),
    password: Yup.string().required("is required")
  }),

  handleSubmit(values, formikBag) {
    // console.log(formikBag);
    formikBag.props.doSignIn(values).then(() => {
      formikBag.props.history.push("/protected");
    });
  }
})(LogFrm);

// const mapPropsToState= (state) => ({
//   ...state,
//   user: state.authReducer.user
// })

export default connect(
  null,
  { doSignIn }
)(LoginForm);