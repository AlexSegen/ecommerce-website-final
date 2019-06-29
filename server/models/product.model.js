import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export default model('Product', ProductSchema);
