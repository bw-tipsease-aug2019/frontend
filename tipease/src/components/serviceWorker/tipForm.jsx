import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { useDispatch } from 'react-redux';
//import {tipWorker} from '../actions/workerActions'; 

const dispatch = useDispatch();

function TipFrm({ errors, touched }) {
  return (
    <div className="form-card">
      <h1>Login</h1>
      <Form className="ui form">
        <div className="field">
          {touched.amount && errors.amount && <p>{errors.amount}</p>}
          <Field type="number" name="amount" placeholder="$5.00" />
        </div>
        <div className="field">
          {touched.comment && errors.comment && <p>{errors.comment}</p>}
          <Field type="text" name="comment" placeholder="Add a comment" />
        </div>
        <button className="ui button" type="submit">
          Tip
        </button>
        <div onClick={()=>{props.history.push('/')}}>Back</div>
      </Form>
    </div>
  );
}

const TipForm = withFormik({
  mapPropsToValues({ amount, comment }) {
    return {
      amount: amount || 0,
      comment: comment || ""
    };
  },

  validationSchema: Yup.object().shape({
    amount: Yup.number()
      .required("is required")
  }),

  handleSubmit(values, formikBag) {
    //dispatch(tipWorker(values,formikBag.props.match.params.id))
    //.then(() => {
    //  formikBag.props.history.push("/");
    //});
  }
})(TipFrm);

export default TipForm;