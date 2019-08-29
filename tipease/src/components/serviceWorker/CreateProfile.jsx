import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { doCreateProfile } from "../../store/actions/authActions";
import CoffeeShopBg from "../CoffeeShopBg";

function ProfileForm({ values, errors, touched }) {
    return (
      <CoffeeShopBg>
        <div className="form-card">
          <h1>Create Your Service Worker Profile</h1>
          <Form className="ui form">
            <div className="field">
              <Field type="text" name="firstName" placeholder="First Name" />
              {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div className="field">
              <Field type="text" name="lastName" placeholder="Last Name" />
              {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div className="field">
              <Field type="text" name="company" placeholder="Company" />
              {touched.company && errors.company && <p>{errors.company}</p>}
            </div>
            <div className="field">
              <Field type="text" name="role" placeholder="Role" />
              {touched.role && errors.role && <p>{errors.role}</p>}
            </div>
            <div className="field">
              <Field type="text" name="thumbnail" placeholder="Thumbnail URL" />
              {touched.thumbnail && errors.thumbnail && <p>{errors.thumbnail}</p>}
            </div>
            <div className="field">
              <Field type="text" name="durationYears" placeholder="Years Employed" />
              {touched.durationYears && errors.durationYears && <p>{errors.durationYears}</p>}
            </div>
            <div className="field">
              <Field type="text" name="durationMonths" placeholder="Months Employed" />
              {touched.durationMonths && errors.durationMonths && <p>{errors.durationMonths}</p>}
            </div>
            <div className="field">
              <Field type="text" name="tagline" placeholder="Tagline" />
              {touched.tagline && errors.tagline && <p>{errors.tagline}</p>}
            </div>
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

            <button className="ui button" type="submit">
              Submit
        </button>
          </Form>
        </div>
      </CoffeeShopBg>
    
  );
}

const CreateProfile = withFormik({
  mapPropsToValues({ firstName, lastName, thumbnail, durationYears, durationMonths, tagline, company, role, email, password, cPassword, isServiceWorker }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      thumbnail: thumbnail || "",
      durationYears: durationYears || "",
      durationMonths: durationMonths || "",
      tagline: tagline || "",
      company: company || "",
      role: role || "",
      email: email || "",
      password: password || "",
      cPassword: cPassword || "",
      isServiceWorker: isServiceWorker || false
      };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required"),
    lastName: Yup.string()
      .required("Last Name is required"),
      durationYears: Yup.number()
    .required("Years Employed is required"),
    durationMonths: Yup.number()
      .required("Months Employed is required"),
    tagline: Yup.string()
    .required("Tagline is required"),
    company: Yup.string()
    .required('Company is required'),
    role: Yup.string()
    .required('Role is required'),
    email: Yup.string()
    .required('Email is required'),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("password is required")
      ,
    cPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match!"
    )}),

  handleSubmit(values, formikBag) {
   
    formikBag.props.doCreateProfile(values)
    .then(() => {formikBag.props.history.push("/login")});
    console.log(values);

 
  }
})(ProfileForm);

export default connect(
  null,
  { doCreateProfile }
)(CreateProfile);
