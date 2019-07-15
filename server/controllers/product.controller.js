import Product from '../models/product.model';

const create = async (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const savedProduct = await product.save();
    return res.status(201).send({ product: savedProduct, msg: 'Product Created successfully' });
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      return res.status(500).send({ product, msg: 'Product Is Duplicate' });
    }
    return next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) return res.status(500).send({ product, msg: 'Product Not Found' });
    return res.send({ product, msg: 'Product Deleted successfully' });
  } catch (err) {
    return next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, { $set: req.body });
    if (!product) return res.status(500).send({ product, msg: 'Product Not Found' });
    return res.send({ product, msg: 'Product Updated successfully' });
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      return res.status(500).send({ product: { _id: req.params.id }, msg: 'Product Is Duplicate' });
    }
    return next(err);
  }
};

const get = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.send(product);
  } catch (err) {
    return next(err);
  }
};
const getAll = async (req, res, next) => {
  try {
    const products = await Product.find({});
    return res.send(products);
  } catch (err) {
    return next(err);
  }
};

export { getAll, get, create, update, remove };
