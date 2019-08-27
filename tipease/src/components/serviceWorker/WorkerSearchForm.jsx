import React from "react";
import { withFormik, Form, Field } from "formik";

import { useDispatch } from 'react-redux';
import {setFilter} from '../actions/workerActions'; 

const dispatch = useDispatch();

function SearchFrm({ errors, touched }) {
  return (
    <div className="form-card">
      <h1>Search</h1>
      <Form className="ui form">
        <div className="field">
          {touched.company && errors.company && <p>{errors.company}</p>}
          <Field type="select" name="company">
            <option value="select" selected>Select A Company...</option>
            {/* Map through a list of all the companies and display them as options */}
          </Field>
        </div>
        <div className="field">
          {touched.role && errors.role && <p>{errors.role}</p>}
          <Field type="select" name="role">
            <option value="select" selected>Select A Role...</option>
            <option value="server">Server</option>
            <option value="bellhop">Bellhop</option>
            <option value="valet">Valet</option>
          </Field>
        </div>

        <div className="field">
          {touched.name && errors.name && <p>{errors.name}</p>}
          <Field type="text" name="name" placeholder="Enter the workers name" />
        </div>
        <button className="ui button" type="submit" onClick={() => {}}>
          Search
        </button>
      </Form>
    </div>
  );
}

const SearchForm = withFormik({
  mapPropsToValues({ company, role, name }) {
    return {
      company: company || '',
      role: role || '',
      name: name || ''
    };
  },

  handleSubmit(values, formikBag) {
    //dispatch(setFilter(values));
    formikBag.resetForm();
  }
})(SearchFrm);

export default SearchForm;
