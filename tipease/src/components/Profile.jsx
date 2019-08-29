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
      <h1>{props.userProfile && props.userProfile.firstName + " " + props.userProfile.lastName}</h1>
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
