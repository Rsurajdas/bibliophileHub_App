import express from 'express';
import cors from 'cors';
import bookRouter from './routes/api/bookRoutes';
import genreRouter from './routes/api/genreRoutes';
import userRouter from './routes/api/userRoutes';
import roleRouter from './routes/api/roleRoutes';
import AppError from './utils/appError';
import globalErrorHandler from './controllers/errorController';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/books', bookRouter);
app.use('/api/v1/genres', genreRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/roles', roleRouter);

app.get('/', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  res.end('<h1>Welcome to Bibliophile Hub</h1>');
});

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} in this server`, 404));
});

app.use(globalErrorHandler);

export default app;
