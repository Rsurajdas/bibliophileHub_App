import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const shelfSchema = new Schema({
  shelf_name: {
    type: String,
    require: [true, 'A shelf must have a name'],
  },
  user: {
    type: ObjectId,
    ref: 'User',
    require: [true, 'Shelf must belong to a user'],
  },
  books: [
    {
      type: ObjectId,
      ref: 'Book',
    },
  ],
});

shelfSchema.pre(/^find/, function (next) {
  this.populate({ path: 'books' });
  next();
});

const Shelf = model('Shelf', shelfSchema);

export default Shelf;
