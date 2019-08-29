import React,{useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { useSelector, connect } from 'react-redux';

import {postTip} from '../../store/actions/tipActions'
import CoffeeShopBg from '../CoffeeShopBg'

function TipFrm(props) {
  const loggedInUser = localStorage.getItem('userid')
  console.log('curWorker', loggedInUser);
  // useEffect(()=>{
  //   props.getWorker(props.match.params.id);
  // },[]);

  return (
    <CoffeeShopBg>
      <div className="form-card">
     
        
        <Form className="ui form">
          <div className="field">
            {props.touched.amount && props.errors.amount && <p>{props.errors.amount}</p>}
            <label htmlFor='amount'>Amount: </label>
            <Field type="number" name="tipAmount" placeholder="$5.00" />
          </div>
          <div className="field">
          <label htmlFor='comment'>Leave a comment: </label>
            <Field type="text" name="comment" placeholder="Add a comment" />
          </div>

          <div className="form-buttons">
            <button className="ui button" type="submit">
              Tip
            </button>
            <button className='ui button' onClick={()=>{props.history.push('/')}}>Back</button>
          </div>
        </Form>
      </div>
    </CoffeeShopBg>
  );
}

const TipForm = withFormik({
  mapPropsToValues({ tipAmount, comment}) {
    // console.log("TCL: mapPropsToValues -> loggedInUser", loggedInUser)
    return {
      tipAmount: tipAmount || 0,
      comment: comment || "",
      user_id: JSON.parse(localStorage.getItem('userid'))
    };
  },

  validationSchema: Yup.object().shape({
    tipAmount: Yup.number()
      .required("is required")
  }),

  handleSubmit(values, formikBag) {
    //dispatch(tipWorker(values,formikBag.props.match.params.id))
    formikBag.props.postTip(values)
    // console.log(formikBag)
    .then(() => {
     formikBag.props.history.push("/");})
    //});
  }
})(TipFrm);

export default connect(
  null,
  { postTip }
)(TipForm);