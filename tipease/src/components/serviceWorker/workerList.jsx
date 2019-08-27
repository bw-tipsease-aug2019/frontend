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

  let filteredWorkers = [];
  if(workers){
    filteredWorkers = [...workers];
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
        const fullName = `${worker.name.first} ${worker.name.last}`
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
    </>
  );
}

export default WorkerList;