import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  age_group: String,
  amazon_product_url: String,
  author: String,
  book_image: String,
  contributor: { type: String, require: true },
  created_date: {
    type: Date,
    default: Date.now(),
  },
  description: String,
  price: { type: Number, require: true },
  primary_isbn10: String,
  primary_isbn13: String,
  publisher: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
    unique: true,
  },
  updated_date: {
    type: Date,
  },
  buy_links: [
    {
      name: String,
      url: String,
    },
  ],
});

const Book = model('Book', bookSchema);

export default Book;
