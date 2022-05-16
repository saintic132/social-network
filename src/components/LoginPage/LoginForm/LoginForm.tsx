import {ErrorMessage, Field, Form, Formik} from 'formik';
import React from 'react';

type ErrorTypes = {
    email: string | null
}

export function LoginForm() {
    return (
        <div>
            <Formik
                initialValues={{email: '', password: ''}}
                validate={values => {
                    const errors: ErrorTypes = {
                        email: null
                    };
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <Field type="email" name="email"/>
                            <ErrorMessage name="email" component="div"/>
                        </div>
                        <div>
                            <Field type="password" name="password"/>
                            <ErrorMessage name="password" component="div"/>
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}