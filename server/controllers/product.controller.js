import Product from '../models/product.model';

const create = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
  });

  product.save((err) => {
    if (err) {
      return next(err);
    }
    return res.send('Product Created successfully');
  });
};
const get = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    return res.send(product);
  });
};

const getAll = (req, res, next) => {
  Product.find({}, (err, product) => {
    if (err) return next(err);
    return res.send(product);
  });
};

const test = (req, res) => {
  res.send('Greetings from the Test controller!');
};
export { test, getAll, get, create };
