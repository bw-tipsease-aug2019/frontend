import React,{useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { useSelector, connect } from 'react-redux';

import {getWorker} from '../../store/actions/workerActions'

function TipFrm(props) {
  const worker = useSelector(state=>state.workerReducer.currentWorker);
  console.log('curWorker', worker);
  useEffect(()=>{
    props.getWorker(props.match.params.id);
  },[]);
  return (
    <div className="form-card">
      {worker.name?
        <h1>Tipping {`${worker.name.first} ${worker.name.last}`}</h1> :
        <></>  
      }
      
      <Form className="ui form">
        <div className="field">
          {props.touched.amount && props.errors.amount && <p>{props.errors.amount}</p>}
          <label htmlFor='amount'>Amount: </label>
          <Field type="number" name="amount" id='amount' placeholder="$5.00" />
        </div>
        <div className="field">
        <label htmlFor='comment'>Leave a comment: </label>
          <Field type="text" name="comment" id="comment" placeholder="Add a comment" />
        </div>

        <div className="form-buttons">
          <button className="ui button" type="submit">
            Tip
          </button>
          <button className='ui button' onClick={()=>{props.history.push('/')}}>Back</button>
        </div>
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

export default connect(
  null,
  { getWorker }
)(TipForm);