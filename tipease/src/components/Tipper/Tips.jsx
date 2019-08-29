import React, {useEffect} from "react";
import {connect} from 'react-redux'
import  {getTipList} from '../../store/actions/tipActions'
import TipCard from "./TipCard";

const Tips = props => {
console.log("TCL: props", props)
    useEffect(() => {
        props.getTipList()
    },[])

    return(
        <>
        { props.tips && props.tips.map(tip => (
            <TipCard key={tip.id} tip={tip} />
    ))}
        </>
    )
}

const mapStateToProps = (state) => ({
    tips: state.tipReducer.tipList,
})

export default connect(mapStateToProps, {getTipList})(Tips)