/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/                            TO DO:                        
/      ~ Create a worker page that will get a specific worker and
/        display more detailed information:
/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import React,{useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getWorker} from '../../store/actions/workerActions'
import '../../App.scss'
const WorkerPage = (props) => {
  const worker = useSelector(state=>state.workerReducer.currentWorker);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getWorker(props.match.params.id));
  },[]);

  return (
    <>
      <div className="worker-page">
        <h1>{`${worker.name.first} ${worker.name.last}'s Page`}</h1>
        <div style={{ background: `url(${worker.thumbnail})` }} />
        <p>{worker.role}</p>
        <p>{worker.tagline}</p>
        <p>Employed for</p>
        <p>{worker.durationEmployed.year} years and {worker.durationEmployed.month} months.</p>
        <h2>Tips: </h2>
      </div>
    </>
  );
}

export default WorkerPage;