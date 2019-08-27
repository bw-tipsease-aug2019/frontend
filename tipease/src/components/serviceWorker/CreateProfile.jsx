import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { doCreateAccount } from "../../store/actions/authActions";

function ProfileForm({ values, errors, touched }) {
    return (
    <div className="form-card">
      <h1>Create Your Service Worker Profile</h1>
      <Form className="ui form">
        <div className="field">
            {touched.first && errors.first && <p>{errors.first}</p>}
            <Field type="text" name="first" placeholder="First Name" />
        </div>
        <div className="field">
            {touched.last && errors.last && <p>{errors.last}</p>}
            <Field type="text" name="last" placeholder="Last Name" />
        </div>
        <div className="field">
            {touched.thumbnail && errors.thumbnail && <p>{errors.thumbnail}</p>}
            <Field type="text" name="thumbnail" placeholder="Thumbnail URL" />
        </div>
        <div className="field">
            {touched.year && errors.year && <p>{errors.year}</p>}
            <Field type="text" name="year" placeholder="Years Employed" />
        </div>
        <div className="field">
            {touched.month && errors.month && <p>{errors.month}</p>}
            <Field type="text" name="month" placeholder="Months Employed" />
        </div>
        <div className="field">
            {touched.tagline && errors.tagline && <p>{errors.tagline}</p>}
            <Field type="text" name="tagline" placeholder="Tagline" />
        </div>
        
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
