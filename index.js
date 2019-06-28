const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client/build")));
const products = [
  { id: 1, name: "Taco", price: 20, image:'https://lorempixel.com/output/food-q-c-640-480-1.jpg'  },
  { id: 1, name: "Fajita", price: 25, image:'https://lorempixel.com/output/food-q-c-640-480-2.jpg' },
  { id: 1, name: "Burrito", price: 23, image:'https://lorempixel.com/output/food-q-c-640-480-3.jpg' }
];
app.get("/api/products", (req, res) => res.json(products));
app.listen(port, () => console.log("Ready"));
