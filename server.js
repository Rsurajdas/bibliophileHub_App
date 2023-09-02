import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zzbuw89.mongodb.net/bibliophile?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  )
  .then(() => console.log('DB connected successfully...'));

app.listen(PORT, () => console.log(`listing to the port ${PORT}`));
