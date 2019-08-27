/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/                            TO DO:                        
/      ~ Create a card for a specific worker and display the data in
/        in an accesible way to be displayed in a list/grid
/          -Thumbnail Photo
/          -Name
/          -Role
/          -Employment Length (Years and Months)
/          -Tagline
/      ~ Create Action Button
/          -Add Tip button
/          -View Worker Button
/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import React from 'react';
import { useDispatch } from 'react-redux';
//import {removeWorker} from '../actions/workerActions';


const WorkerCard = props => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{props.worker.name.first} {props.worker.name.last}</h2>
      <div style={{ background: `url(${props.worker.thmubnail})` }} />
      <div>
        <p>{props.worker.role}</p>
        <p>{props.worker.tagline}</p>
        <p>Employed for<br /><p>{props.worker.durationEmployed.year} years and {props.worker.durationEmployed.month} months.</p></p>
        <div onClick={()=>{/* Add tipping finctionality, Route to tipping form /tip/${props.worker.id} */}}>Tip</div>
        <div onClick={()=>{/* Route to /worker/${props.worker.id} the worker page for this worker */}}>More Info</div>
        <div onClick={()=>{/*dispatch(removeWorker())*/}}>DELETE</div>
      </div>
    </div>
  );
}

export default WorkerCard;
