import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom'

function CreateAccountForm({ values, errors, touched }) {
    return (
        <Form>
            <Field name="name" type="text"  placeholder="full name"/>
            <Field name="email" type="email"  placeholder="email"/>
            <Field name="password" type="password" placeholder="password" />
            <Field name="gender" component="select" placeholder="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </Field>
            <button type="submit">Submit</button>
        </Form>
    )
}

const FormikCreateAccountForm = withFormik({
    mapPropsToValues({ name, email, password, gender }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            gender: gender || 'male'
        }
    },

    validationSchema() {
        Yup.object.shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string()
                         .min(6, 'Your password must contain at least 6 characters')
                         .required(),
            gender: Yup.mixed().oneOf(['male', 'female', 'other'])
        })
    },

    handleSubmit(values, { resetForm }) {
        // TODO: POST values to server
        resetForm()
        return <Redirect to="/" />
    }
})(CreateAccountForm)

export default FormikCreateAccountForm