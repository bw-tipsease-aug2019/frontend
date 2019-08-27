
import React from 'react'
import CreateAccountForm from './forms/CreateAccount'
import { Link } from 'react-router-dom'

export default function CreateAccountPage(props) {
    return (
        <div className="create-account-page">
            <CreateAccountForm props={props} />
            <p>Already a member? <Link to='/login'>Sign in</Link></p>
        </div>
    )
}