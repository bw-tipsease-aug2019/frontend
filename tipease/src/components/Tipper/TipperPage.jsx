import React from "react";
import { Route } from 'react-router-dom'
import TipList from './TipList'

const TipperPage = () => {
    return (
        <div>
            <h1>Tipper Page</h1>
            {/* <TipList tips={} /> */}
            <Route path="/worker/tips"/>
        </div>
    )
}

export default TipperPage;