import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { doCreateProfile } from "../../store/actions/authActions";
import CoffeeShopBg from "../CoffeeShopBg";

function ProfileFormEdit({ values, errors, touched }) {
    return (
      <CoffeeShopBg>
        <div className="form-card">
          <h1>Edit Profile</h1>
          <Form className="ui form">
            <div className="field">
              <Field type="text" name="firstName" placeholder="First Name" />
            </div>

            <div className="field">
              <Field type="text" name="lastName" placeholder="Last Name" />
            </div>
            
            <div className="field">
              <Field type="text" name="company" placeholder="Company" />
            </div>

            <div className="field">
              <Field type="text" name="role" placeholder="Role" />
            </div>

            <div className="field">
              <Field type="text" name="thumbnail" placeholder="Thumbnail URL" />
            </div>

            <div className="field">
              <Field type="text" name="durationYears" placeholder="Years Employed" />
            </div>

            <div className="field">
              <Field type="text" name="durationMonths" placeholder="Months Employed" />
            </div>

            <div className="field">
              <Field type="text" name="tagline" placeholder="Tagline" />
            </div>

            <div className="field">
              <Field type="email" name="email" placeholder="Email" />
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
            </div>

            <button className="ui button" type="submit">
              Submit
            </button>
          </Form>
        </div>
      </CoffeeShopBg>
  );
}

const EditProfile = withFormik({
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
    durationYears: Yup.number(),
    durationMonths: Yup.number(),
    tagline: Yup.string(),
    company: Yup.string(),
    role: Yup.string(),
    email: Yup.string(),
    password: Yup.string().min(8, "Password must be 8 characters or longer"),
    cPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match!")
  }),

  handleSubmit(values, formikBag) {
   
    formikBag.props.doCreateProfile(values)
    .then(() => {formikBag.props.history.push("/")});
    console.log(values);

 
  }
})(ProfileFormEdit);

export default connect(
  null,
  { doCreateProfile }
)(EditProfile);
