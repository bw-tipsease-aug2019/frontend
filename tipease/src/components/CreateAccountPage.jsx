
import React from 'react'
import CreateAccountForm from './forms/CreateAccount'
import { Link } from 'react-router-dom'

export default function CreateAccountPage() {
    return (
        <div className="create-account-page">
            <CreateAccountForm />
            <p>Already a member? <Link to='/protected'>Sign in</Link></p>
        </div>
    )
}