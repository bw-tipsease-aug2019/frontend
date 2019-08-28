import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { doEditProfile } from "../../store/actions/authActions";

function EditProfileForm({ values, errors, touched }) {
    return (
    <div className="form-card">
      <h1>Edit Your Service Worker Profile</h1>
      <Form className="ui form">
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

const EditProfile = withFormik({
  mapPropsToValues({ thumbnail, year, month, tagline }) {
    return {
      thumbnail: thumbnail || "",
      year: year || "",
      month: month || "",
      tagline: tagline || "",
      };
  },
  validationSchema: Yup.object().shape({
    year: Yup.string()
    .required("Years Employed is required"),
    month: Yup.string()
      .required("Months Employed is required"),
    tagline: Yup.string()
    .required("Tagline is required"),
  }),

  handleSubmit(values, formikBag) {
   
    formikBag.props.doEditProfile(values)
    .then(() => {formikBag.props.history.push("/")});
    console.log(values);

 
  }
})(EditProfileForm);

export default connect(
  null,
  { doEditProfile }
)(EditProfile);
