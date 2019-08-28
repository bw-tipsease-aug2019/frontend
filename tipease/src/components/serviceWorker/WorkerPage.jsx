/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/                            TO DO:                        
/      ~ Create a worker page that will get a specific worker and
/        display more detailed information:
/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorker } from "../../store/actions/workerActions";
import "../../App.scss";
import CoffeeShopBg from "../CoffeeShopBg";

const WorkerPage = props => {
  const worker = useSelector(state => state.workerReducer.currentWorker);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorker(props.match.params.id));
  }, []);

  return (
    <CoffeeShopBg>
      <div className="worker-page">
        <h1>{`${worker.name.first} ${worker.name.last}`}</h1>
        <img
          className="worker-thumbnail"
          alt="Worker Photo Here"
          src={worker.thumbnail}
        />
        <h3>{worker.company}</h3>
        <p>{worker.role}</p>
        <p>{worker.tagline}</p>
        <p>Employed for</p>
        <p>
          {worker.durationEmployed.year} years and{" "}
          {worker.durationEmployed.month} months.
        </p>
      </div>
    </CoffeeShopBg>
  );
};

export default WorkerPage;
