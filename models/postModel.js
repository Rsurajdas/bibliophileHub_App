import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const postSchema = new Schema({
  user: { type: ObjectId, ref: 'User' },
  text: String,
  createdAt: { type: Date, default: Date.now },
  likes: [{ type: ObjectId, ref: 'User' }],
  comments: [
    {
      user: { type: ObjectId, ref: 'User' },
      text: String,
      createdAt: Date,
    },
  ],
});

const Post = model('Post', postSchema);

export default Post;
