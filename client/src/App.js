import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { products: [] };
  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }
  render() {
    return (
      <div className="App">
        <h1>Products</h1>
          {this.state.products.map((product, index) => (
            <div key={index}>
              <img src={product.image} alt={product.name} />
              <br/>
              {product.name} ${product.price}
              <hr/>
            </div>
          ))}
      </div>
    );
  }
}
export default App;
