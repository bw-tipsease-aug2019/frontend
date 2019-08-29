import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTipList } from "../../store/actions/tipActions";
const Tips = props => {
  console.log("TCL: props", props);
  useEffect(() => {
    props.getTipList();
  }, []);
  

  return (
    <div className="tip-card-wrapper">
      {props.tips &&
        props.tips.map(tip => (
            <div className="tip-card">
                <div className="tip-card-amount">
                  <p>${tip.tipAmount}</p>
                </div>
                <div className="tip-card-title">
                  <p>{tip.comment}</p>
                </div>
            </div>
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  tips: state.tipReducer.tipList
});

export default connect(
  mapStateToProps,
  { getTipList }
)(Tips);
