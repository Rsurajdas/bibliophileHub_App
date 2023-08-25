import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const postSchema = new Schema({
  user: { type: ObjectId, ref: 'User' },
  book: { type: ObjectId, ref: 'Book' },
  text: String,
  createdAt: { type: Date, default: Date.now },
  likes: [{ type: ObjectId, ref: 'User' }],
  comments: [
    {
      user: { type: ObjectId, ref: 'User' },
      text: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Post = model('Post', postSchema);

export default Post;
