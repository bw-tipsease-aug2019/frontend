import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {doGetProfile} from '../store/actions/authActions'
import '../App.scss';
import CoffeeShopBg from './CoffeeShopBg';
import ProfileCard from './ProfileCard';

const Profile = props => {
    console.log("TCL: props", props)
    const isServiceWoker = localStorage.getItem('serviceWorker')
    console.log("TCL: isServiceWoker", isServiceWoker)
    useEffect(() => {
        props.doGetProfile()
    }, [])

    return(
        <>
        {props.userProfile &&
        <ProfileCard props={props.userProfile} />
        }
        </>
    )
}

const mapStateToProps = (state) => ({
    userProfile: state.authReducer.userProfile
})
export default connect(mapStateToProps, {doGetProfile})(Profile)