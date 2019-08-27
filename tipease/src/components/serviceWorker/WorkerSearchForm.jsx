import React, { useState } from "react";

import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/actions/workerActions';


function SearchFrm(props) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    company: '',
    role: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilter(values));
  }

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="form-card">
      <h1 className="worker-search">Search</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <select name="company" onChange={handleChange}>
            <option value="select" defaultValue>Select A Company...</option>
            {props.companyNames.map((name,i)=>{
              return (
                <option key={i} value={`${name}`}>{`${name}`}</option>
              );
            })}
          </select>
        </div>
        <div className="field">
          <select name="role" onChange={handleChange}>
            <option value="select" defaultValue>Select A Role...</option>
            <option value="Server">Server</option>
            <option value="Bellhop">Bellhop</option>
            <option value="Valet">Valet</option>
          </select>
        </div>

        <div className="field">
          <input className="worker-search" type="text" name="name" placeholder="Enter the workers name" value={values.name} onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchFrm;
