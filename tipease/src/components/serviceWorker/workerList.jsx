/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/                            TO DO:                        
/      ~ Create a list of WorkerCards for each worker.
/          -List displayed in grid format
/          -Allow list to sort by worker role
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import React, {useEffect} from 'react';
import SearchForm from './workerSearchForm';
import { useDispatch, useSelector } from 'react-redux';
import {getWorkers} from '../actions/index';

const WorkerList = props => {
  const workers = useSelector(state => state.workers);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  let filteredWorkers = [...workers];
  if(filter.company){
    filteredWorkers = filteredWorkers.filter(worker=>worker.company===filter.company);
  }

  if(filter.role){
    filteredWorkers = filteredWorkers.filter(worker=>worker.role===filter.role);
  }

  if(filter.name){
    filteredWorkers = filteredWorkers.filter(worker=>worker.name.includes(filter.name));
  }

  useEffect(()=>{
    dispatch(getWorkers());
  },[]);

  return (
      <div className='searchParameters'>
        <SearchForm />
      </div>

      <div className='workersGrid'>
        {filteredWorkers.map(worker => {
          return (
            <div className='workersGrid-item'>
              <WorkerCard key={worker.id} worker={worker} />
            </div>
          );
        })}
      </div>
  );
}

export default WorkerList;