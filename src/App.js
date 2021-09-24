// Core libs
import React from "react";

// Third-party libs

// Custom
import { getProducts } from "./api";
import Home from "./pages/Home";
import {readLocalStorage, writeLocalStorage} from "./utils/localStorage";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isFetchingSuccess: false,
      isFetchingProducts: false,
      isFetchingError: false,
      fetchError: null,
    };
  }

  componentDidMount() {

    this.setState((prevState) => ({
      ...prevState,
      isFetchingProducts: true,
    }));

    const products = readLocalStorage("products");

    if (!products || products.length === 0) {
      getProducts().then((data) => {
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
    writeLocalStorage("products", JSON.stringify(this.state.products));
  }

  render() {
    const { products, isFetchingProducts, isFetchingSuccess, fetchError} = this.state;

    return (
      <>
        <Home 
          products={products}
          isFetchingSuccess={isFetchingSuccess}
          isFetchingProducts={isFetchingProducts}
          fetchError={fetchError}
          handleSubmit={(newProduct) => {
            this.setState((prevState) => ({
              ...prevState,
              products: [...prevState.products, newProduct]
            }));
          }}
        />
       
      </>
    );
  }
}

export default App;
