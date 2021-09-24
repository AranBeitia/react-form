import React, { Component } from 'react'

class Home extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {
			products,
			isFetchingSuccess,
			isFetchingProducts,
			isFetchingError,
			fetchError,
		} = this.props
		return (
			<>
				<h1>Home</h1>
				{isFetchingProducts && <h4>Fetching products...</h4>}
				{!isFetchingProducts && isFetchingSuccess
					? products.map((item, index) => <p key={index}>{item.title}</p>)
					: 'No products'}
			</>
		)
	}
}

export default Home
