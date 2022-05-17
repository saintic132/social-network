import {ErrorMessage, Field, Form, Formik} from 'formik';
import s from './LoginForm.module.css'
import React from 'react';
import {useDispatch} from "react-redux";
import {loginThunk} from "../../../redux/auth-reducer";

type FormikErrorsType = {
    email: string
    password: string
}

export function LoginForm() {

    const dispatch = useDispatch()

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values: any) => {
        let {email, password, rememberMe} = values
        dispatch(loginThunk(email, password, rememberMe))
    }

    const validate = (values: { email: string, password: string }) => {
        const errors: FormikErrorsType = {} as FormikErrorsType

        if (!values.email) {
            errors.email = 'Required'
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address'
        }

        if (values.password.length < 5) {
            errors.password = 'Min length is 5'
        } else if (values.password.length > 20)
            errors.password = 'Max length is 20'

        return errors;
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                <Form className={s.loginForm}>
                    <Field type="email" name="email" placeholder={'Enter the email'}/>
                    <ErrorMessage name="email" component="div"/>
                    <Field type="password" name="password" placeholder={'Enter the password'}/>
                    <ErrorMessage name="password" component="div"/>
                    <div className={s.checkBoxFiled}>
                        <Field type="checkbox" name="rememberMe"/>Remember Me
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>

    )
}