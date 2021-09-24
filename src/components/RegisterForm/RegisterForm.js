import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import "./RegisterForm.css"

export default class RegisterForm extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Formik
				initialValues={{
					name: '',
					email: '',
					lastname: '',
					password: '',
				}}
				validate={(values) => {
					const errors = {}
					const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

					if (values.name === '') {
						errors.name = 'Name is required'
					}

					if (values.lastname === '') {
						errors.last = 'Last name is required'
					}

					if (values.email === '') {
						errors.email = 'Email is required'
					} else if (!emailTest.test(values.email)) {
						errors.email = 'Invalid email format'
					}

					if (values.password === '') {
						errors.password = 'Password is required'
					} else if (values.password.length < 3) {
						errors.password =
							'Invalid password length, should be at least 3 characters long'
					}

          return errors
				}}
				onSubmit={({ setSubmiting }) => {
					alert('Submitting form...')
					setSubmiting(false)
				}}
			>
				{({ errors, isSubmitting }) => (
					<Form>
						<div className="product-form__input">
							<label htmlFor="name">Name</label>
							<Field type="text" name="name" placeholder="Enter name" />
							<ErrorMessage className="invalid-input" component="div" name="name" />
						</div>
						<div className="product-form__input">
							<label htmlFor="lastname">lastname</label>
							<Field type="text" name="lastname" placeholder="Enter lastname" />
							<ErrorMessage className="invalid-input" component="div" name="lastname" />
						</div>
						<div className="product-form__input">
							<label htmlFor="email">email</label>
							<Field type="text" name="email" placeholder="Enter email" />
							<ErrorMessage className="invalid-input" component="div" name="email" />
						</div>
						<div className="product-form__input">
							<label htmlFor="password">password</label>
							<Field type="text" name="password" placeholder="Enter password" />
							<ErrorMessage
								className="invalid-input"
								component="div"
								name="password"
							/>
						</div>
						<button type="submit" disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Register'}
						</button>
					</Form>
				)}
			</Formik>
		)
	}
}
