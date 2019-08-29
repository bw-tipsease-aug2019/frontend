import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {doGetProfile} from '../store/actions/authActions'
import '../App.scss';
import CoffeeShopBg from './CoffeeShopBg';

const ProfileCard = props => {
    console.log("TCL: props procard", props.id)
return(
   <>
   {/* <h1>{props.userProfile.email}</h1> */}
   </>
)
}

export default ProfileCard