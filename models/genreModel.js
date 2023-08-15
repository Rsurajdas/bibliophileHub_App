import { Schema, model } from 'mongoose';
import slugify from 'slugify';

const { ObjectId } = Schema.Types;

const genreSchema = new Schema({
  genre_name: {
    type: String,
    require: [true, 'A Genre must have a name'],
    unique: true,
  },
  genre_name_encoded: String,
  books: [
    {
      type: ObjectId,
      ref: 'Book',
    },
  ],
});

genreSchema.pre('save', function (next) {
  this.genre_name_encoded = slugify(this.genre_name, { lower: true });
  next();
});

const Genre = model('Genre', genreSchema);

export default Genre;
