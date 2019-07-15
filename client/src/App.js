import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { products: [] };
  async componentDidMount() {
    const res = await fetch("/api/products");
    const products = await res.json();
    this.setState({ products });
  }
  render() {
    return (
      <div className="App">
        <h1>My Ecommerce Website</h1>
        {this.state.products.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.name} />
            <br />
            {product.name} ${product.price}
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
export default App;
