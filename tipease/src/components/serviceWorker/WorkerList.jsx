/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/                            TO DO:                        
/      ~ Create a list of WorkerCards for each worker.
/          -List displayed in grid format
/          -Allow list to sort by worker role
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import React, {useEffect} from 'react';
import SearchForm from './WorkerSearchForm';
import { useDispatch, useSelector } from 'react-redux';
import WorkerCard from './WorkerCard';
import {getWorkers} from '../../store/actions/workerActions';


const WorkerList = props => {
  const workers = useSelector(state => state.workerReducer.workers);
  const filter = useSelector(state => state.workerReducer.filter);
  const dispatch = useDispatch();
  let companyNames =[];
  let filteredWorkers = [];
  if(workers){
    filteredWorkers = [...workers];
    companyNames = [...new Set(workers.map(worker => worker.company))];
  }
  if(filter){
    if(filter.company && filter.company!=='select'){
      filteredWorkers = filteredWorkers.filter(worker=>worker.company===filter.company);
    }

    if(filter.role && filter.role!=='select'){
      filteredWorkers = filteredWorkers.filter(worker=>worker.role===filter.role);
    }

    if(filter.name){
      filteredWorkers = filteredWorkers.filter(worker=>{
        const fullName = `${worker.firstName} ${worker.lastName}`
        return (fullName.search(new RegExp(filter.name, "i")) === 0);
      });
    }
  }

  useEffect(()=>{
    dispatch(getWorkers());
  },[]);

  return (
    <>
      <div className='searchParameters'>
        <SearchForm companyNames={companyNames}/>
      </div>

      <div className='workers-grid'>
        {filteredWorkers.map(worker => {
          return (
            <div key={worker.id} className='workers-grid-item'>
              <WorkerCard key={worker.id} worker={worker} redirect={props.history.push}/>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WorkerList;
