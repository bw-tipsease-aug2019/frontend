import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { doCreateProfile } from "../../store/actions/authActions";

function ProfileFormTipper({ values, errors, touched }) {
    return (
    <div className="form-card">
      <h1>Create Your Service Worker Profile</h1>
      <Form className="ui form">
        <div className="field">
            <Field type="text" name="first" placeholder="First Name" />
            {touched.first && errors.first && <p>{errors.first}</p>}
        </div>
        <div className="field">
            <Field type="text" name="last" placeholder="Last Name" />
            {touched.last && errors.last && <p>{errors.last}</p>}
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

const CreateProfileTipper = withFormik({
 mapPropsToValues({ first, last}) {
    return {
      first: first || "",
      last: last || "",
      };
  },
  validationSchema: Yup.object().shape({
    first: Yup.string()
      .required("First Name is required"),
    last: Yup.string()
      .required("Last Name is required"),
  }),

  handleSubmit(values, formikBag) {
   
    formikBag.props.doCreateProfile(values)
    .then(() => {formikBag.props.history.push("/")});
    console.log(values);

 
  }
})(ProfileFormTipper);

export default connect(
  null,
  { doCreateProfile }
)(CreateProfileTipper);
