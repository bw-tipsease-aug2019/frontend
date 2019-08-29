import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { doCreateProfile } from "../../store/actions/authActions";

function ProfileFormEdit({ values, errors, touched }) {
    return (
    <div className="form-card">
      <h1>Create Your Service Worker Profile</h1>
      <Form className="ui form">
        <div className="field">
            {touched.company && errors.company && <p>{errors.company}</p>}
            <Field type="text" name="company" placeholder="Company" />
        </div>
        <div className="field">
            {touched.role && errors.role && <p>{errors.role}</p>}
            <Field type="text" name="role" placeholder="Role" />
        </div>
        <div className="field">
            {touched.thumbnail && errors.thumbnail && <p>{errors.thumbnail}</p>}
            <Field type="text" name="thumbnail" placeholder="Thumbnail URL" />
        </div>
        <div className="field">
            {touched.durationYears && errors.durationYears && <p>{errors.durationYears}</p>}
            <Field type="text" name="durationYears" placeholder="Years Employed" />
        </div>
        <div className="field">
            {touched.durationMonths && errors.durationMonths && <p>{errors.durationMonths}</p>}
            <Field type="text" name="durationMonths" placeholder="Months Employed" />
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
  mapPropsToValues({ thumbnail, durationYears, durationMonths, tagline, company, role }) {
    return {
      thumbnail: thumbnail || "",
      durationYears: durationYears || "",
      durationMonths: durationMonths || "",
      tagline: tagline || "",
      company: company || "",
      role: role || ""
      };
  },
  validationSchema: Yup.object().shape({
    durationYears: Yup.number(),
    durationMonths: Yup.number(),
    tagline: Yup.string(),
    company: Yup.string(),
    role: Yup.string(),
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
