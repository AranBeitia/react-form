// Core libs
import React from 'react'

// Third-party libs

// Custom
import * as api from './api'
import { readLocalStorage, writeLocalStorage } from './utils/localStorage'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			products: [],
			isFetchingSuccess: false,
			isFetchingProducts: false,
			isFetchingError: false,
			fetchError: null,
		}
	}

	componentDidMount() {
		this.setState((prevState) => ({
			...prevState,
			isFetchingProducts: true,
		}))

		api.getProducts().then((data) => {
			this.setState((prevState) => ({
				...prevState,
				products: data,
				isFetchingProducts: false,
				isFetchingSuccess: true,
				fetchError: null,
			}))
		})
	}

	componentDidUpdate() {}

	render() {
		const { products, isFetchingProducts, isFetchingSuccess, fetchError } =
			this.state

		return (
			<>
				{isFetchingProducts && <h4>Fetching products...</h4>}
        {}
				{!isFetchingProducts &&
					isFetchingSuccess ?
					products.map((item) => <p>{item.title}</p>) : "No products"}
			</>
		)
	}
}

export default App
