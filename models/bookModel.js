import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const bookSchema = new Schema(
  {
    age_group: String,
    amazon_product_url: String,
    author: {
      type: ObjectId,
      ref: 'User',
    },
    book_image: String,
    created_date: {
      type: Date,
      default: Date.now,
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
    genres: [
      {
        type: ObjectId,
        ref: 'Genre',
      },
    ],
    buy_links: [
      {
        name: String,
        url: String,
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

bookSchema.indexes({ name: 1, author: 1 });

bookSchema.pre(/^find/, function (next) {
  this.populate({ path: 'author', select: 'name photo followers' }).populate({
    path: 'shelf',
    select: 'shelf_name',
  });
  next();
});

bookSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'book',
  localField: '_id',
});

bookSchema.virtual('shelf', {
  ref: 'Shelf',
  foreignField: 'books.book',
  localField: '_id',
});

const Book = model('Book', bookSchema);

export default Book;
