import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import productSchema from"./productSchema"
import './ProductsForm.css'

export default class ProductsForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			brand: '',
			price: 0,
			quantity: 0,
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()

		//Validation
		const data = { ...this.state }

		this.props.handleSubmit(data)
	}

	handleChange(event) {
		this.setState((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}

	render() {
		return (
			<Formik
        validationSchema={productSchema}
				initialValues={{ title: '', brand: '', price: '', quantity: '' }}
				validate={(values) => {
					const errors = {}

					if (values.title === '') errors.title = 'Title is required'
					if (values.brand === '') errors.brand = 'Brand is required'
					if (values.price === '') errors.price = 'Price is required'
					if (values.quantity === '') errors.quantity = 'Quantity is required'
					return errors
				}}
				onSubmit={({ handleSubmit }) => {
					alert('Submitting form...')
					handleSubmit(false)
				}}
			>
				{({ errors, handleSubmit }) => (
					<Form className="product-form" onSubmit={this.handleSubmit}>
						<div className="product-form__input">
							<label htmlFor="title">Title</label>
							<Field type="text" name="title" placeholder="Enter title" />
							<ErrorMessage
								className="invalid-input"
								component="div"
								name="title"
							/>
						</div>
						<div className="product-form__input">
							<label htmlFor="brand">brand</label>
							<Field type="text" name="brand" placeholder="Enter brand" />
							<ErrorMessage
								className="invalid-input"
								component="div"
								name="brand"
							/>
						</div>
						<div className="product-form__input">
							<label htmlFor="price">price</label>
							<Field type="number" name="price" placeholder="Enter price" />
							<ErrorMessage
								className="invalid-input"
								component="div"
								name="title"
							/>
						</div>
						<div className="product-form__input">
							<label htmlFor="quantity">quantity</label>
							<Field type="text" name="quantity" placeholder="Enter quantity" />
							<ErrorMessage
								className="invalid-input"
								component="div"
								name="quantity"
							/>
						</div>
						<button type="submit" disabled={handleSubmit}>
							{handleSubmit ? 'Submitting...' : 'Create Product'}
						</button>
					</Form>
				)}
			</Formik>
			// <>
			// 	<form className="product-form" onSubmit={this.handleSubmit}>
			// 		<div className="product-form__input">
			// 			<label htmlFor="title">Title</label>
			// 			<input
			// 				type="text"
			// 				id="title"
			// 				name="title"
			// 				value={this.state.title}
			// 				onChange={this.handleChange}
			// 			/>
			// 		</div>
			// 		<div className="product-form__input">
			// 			<label htmlFor="brand">Brand</label>
			// 			<input
			// 				type="text"
			// 				id="brand"
			// 				name="brand"
			// 				value={this.state.brand}
			// 				onChange={this.handleChange}
			// 			/>
			// 		</div>
			// 		<div className="product-form__input">
			// 			<label htmlFor="price">Price</label>
			// 			<input
			// 				type="number"
			// 				id="price"
			// 				name="price"
			// 				value={this.state.price}
			// 				onChange={this.handleChange}
			// 			/>
			// 		</div>
			// 		<div className="product-form__input">
			// 			<label htmlFor="quantity">Quantity</label>
			// 			<input
			// 				type="number"
			// 				id="quantity"
			// 				name="quantity"
			// 				value={this.state.quantity}
			// 				onChange={this.handleChange}
			// 			/>
			// 		</div>
			// 		<button type="submit">Create Product</button>
			// 	</form>
			// </>
		)
	}
}
