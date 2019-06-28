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
        <ul className="passwords">
          {this.state.products.map((product, index) => (
            <li key={index}>
              {product.name} ${product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
