import React, { Component } from 'react'

import ProductsForm from '../../components/ProductsForm'
import RegisterForm from '../../components/RegisterForm'

export default class Home extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { products, isFetchingProducts, isFetchingSuccess, fetchError } =
			this.props
		return (
			<>
				<h1>Home</h1>
				<div className="product-list">
					{isFetchingProducts && <h4>Fetching Products...</h4>}
					{isFetchingSuccess
						? products.map((p) => <p key={p.id}>{p.title}</p>)
						: 'No Products'}
				</div>
				<div className="product-form">
					<ProductsForm handleSubmit={this.props.handleSubmit} />
					{/* <RegisterForm /> */}
				</div>
			</>
		)
	}
}
