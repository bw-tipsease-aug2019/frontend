import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { doCreateProfile } from "../../store/actions/authActions";

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

const CreateProfile = withFormik({
  mapPropsToValues({ first, last, thumbnail, year, month, tagline }) {
    return {
      first: first || "",
      last: last || "",
      thumbnail: thumbnail || "",
      year: year || "",
      month: month || "",
      tagline: tagline || "",
      };
  },
  validationSchema: Yup.object().shape({
    first: Yup.string()
      .required("First Name is required"),
    last: Yup.string()
      .required("Last Name is required"),
    year: Yup.string()
    .required("Years Employed is required"),
    month: Yup.string()
      .required("Months Employed is required"),
    tagline: Yup.string()
    .required("Tagline is required"),
  }),

  handleSubmit(values, formikBag) {
   
    formikBag.props.doCreateProfile(values)
    .then(() => {formikBag.props.history.push("/")});
    console.log(values);

 
  }
})(ProfileForm);

export default connect(
  null,
  { doCreateProfile }
)(CreateProfile);
