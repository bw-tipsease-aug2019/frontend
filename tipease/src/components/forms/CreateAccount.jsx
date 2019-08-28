import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { doCreateAccount } from "../../store/actions/authActions";
import CoffeeShopBg from "../CoffeeShopBg";
import { Link } from "react-router-dom";

function RegFrm({ values, errors, touched }) {
    return (
    <CoffeeShopBg>
      <div className="form-card">
        <h1>Create an Account</h1>
        <Form className="ui form">
          <div className="field">
              <Field type="email" name="email" placeholder="Email" />
              {touched.email && errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="field">
              <Field type="password" name="password" placeholder="Password" />
              {touched.password && errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="field">
              <Field
                type="password"
                name="cPassword"
                placeholder="Confirm Password"
              />
              {touched.cPassword && errors.cPassword && <p className="error">{errors.cPassword}</p>}
          </div>
          <div className="field">
            <label htmlFor="isServiceWorker">
              <div className="is-service-worker">
              <p>Are you a service worker?</p>
              <Field type="checkbox" name="isServiceWorker" checked={values.isServiceWorker} />
              </div>
            </label>
            {touched.isServiceWorker && errors.isServiceWorker && <p className="error">{errors.isServiceWorker}</p>}
          </div>
          {/* disabled={isSubmitting}  ***Removed from submit button for testing***/}
          <div className="form-buttons">
            <button className="ui button" type="submit">
              Submit
            </button>
            <button className="ui button" type="reset">
              Reset Form
            </button>
          </div>
        </Form>
          <p>Already a member? <Link to='/login'>Sign in</Link></p>
      </div>
    </CoffeeShopBg>
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
      .email("email is not valid")
      .required("email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("password is required")
      ,
    cPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match!"
    )
  }),

  handleSubmit(values, formikBag) {
   
    formikBag.props.doCreateAccount(values)
    .then(() => {formikBag.props.history.push("/login")});
   console.log(values);

 
  }
})(RegFrm);

export default connect(
  null,
  { doCreateAccount }
)(RegistrationForm);