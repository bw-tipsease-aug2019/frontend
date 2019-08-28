import React, { useEffect }from "react";
import { getUsers } from '../../store/actions/authActions'
import {connect} from 'react-redux'
import WorkerCard from "./WorkerCard";
import WorkerPage from './WorkerPage'
const AccountInfo = (props) => {
    console.log(props)
    useEffect(() => {
      props.getUsers()
    },[]);

    
    return (
        props.user &&  
        (
            <>
            {props.user.map(res =>(
                <>
              <WorkerCard key={res.email} worker={res} />
              <WorkerPage key={res.email} worker={res} />
              </>
          ))}
            </>
        )
        
      );
    };
    
    
    
    const mapStateToProps = (state) => ({     
        user: state.authReducer.user,
        // console.log("TCL: state", state)
    })
    
    
    
    export default connect(mapStateToProps, {getUsers})(AccountInfo);
    