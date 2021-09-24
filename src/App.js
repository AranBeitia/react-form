// Core libs
import React from 'react'

// Third-party libs

// Custom
import * as api from './api'
import { readLocalStorage, writeLocalStorage } from './utils/localStorage'
import Home from './pages/Home'
import products from './utils/demo-data'

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
    }));

    const products = readLocalStorage("products");

    if (!products || products.length <= 0) {
      api.getProducts().then((data) => {
        this.setState((prevState) => ({
          ...prevState,
          products: data,
          isFetchingProducts: false,
          isFetchingSuccess: true,
          fetchError: null
        }));
      }).catch(() => {
        this.setState((prevState) => ({
          ...prevState,
          isFetchingProducts: false,
          isFetchingError: true,
          fetchError: null
        }));
      });
    }
  }

	componentDidUpdate() {
		writeLocalStorage('app-state', JSON.stringify(products))
	}

	render() {
		const { products, isFetchingProducts, isFetchingSuccess, fetchError } =
			this.state

		return (
			<>
				<Home
					products={products}
					isFetchingProducts={isFetchingProducts}
					isFetchingSuccess={isFetchingSuccess}
					fetchError={fetchError}
				/>
			</>
		)
	}
}

export default App
