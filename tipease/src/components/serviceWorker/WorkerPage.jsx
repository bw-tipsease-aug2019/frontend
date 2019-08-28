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
        <h1>{`${worker.firstName} ${worker.lastName}`}</h1>
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
          {worker.durationYear} years and{" "}
          {worker.durationMonth} months.
        </p>
      </div>
    </CoffeeShopBg>
  );
};

export default WorkerPage;