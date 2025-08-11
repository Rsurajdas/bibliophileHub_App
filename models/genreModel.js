import { Schema, model } from 'mongoose';
import slugify from 'slugify';

const genreSchema = new Schema({
  genre_name: {
    type: String,
    required: [true, 'A Genre must have a name'],
    unique: true,
    minlength: 3,
  },
  genre_name_encoded: String,
});

genreSchema.pre('save', function (next) {
  this.genre_name_encoded = slugify(this.genre_name, { lower: true });
  next();
});

const Genre = model('Genre', genreSchema);

export default Genre;
