import React, { useEffect } from "react";
import { connect } from "react-redux";
import { doGetProfile } from "../store/actions/authActions";
const Profile = props => {
  console.log("TCL: props", props);
  useEffect(() => {
    props.doGetProfile();
  }, []);


  return (
    <>
      <h1>
        Name:{" "}
        {props.userProfile &&
          props.userProfile.firstName + " " + props.userProfile.lastName}
      </h1>
      <img src={props.userProfile && props.userProfile.thumbnail} alt='User Picture'/>
      <p>Company: {props.userProfile && props.userProfile.company}</p>
      <p>Role: {props.userProfile && props.userProfile.role}</p>
      <p>
        Employed For:{" "}
        {props.userProfile &&
          props.userProfile.durationYears +
            " years and " +
            props.userProfile.durationMonths +
            " months"}
      </p>
      <p>Tagline: {props.userProfile && props.userProfile.tagline}</p>
    </>
  );
};

const mapStateToProps = state => ({
  userProfile: state.authReducer.userProfile
});

export default connect(
  mapStateToProps,
  { doGetProfile }
)(Profile);
