import express from 'express';
import { join } from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import product from './routes/product.route';

const devDbUrl =
  // eslint-disable-next-line max-len
  'mongodb+srv://myecommerceuser:KJLYxlpaMvkt9veR@cluster0-hshm6.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || devDbUrl;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(join(__dirname, '/../client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/products', product);
app.listen(port, () => console.log(`Server: http://localhost:${port}`));
