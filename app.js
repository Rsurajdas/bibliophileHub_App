import path from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import mongoSanitize from 'express-mongo-sanitize';
// import hpp from 'hpp';
import bookRouter from './routes/api/bookRoutes';
import genreRouter from './routes/api/genreRoutes';
import userRouter from './routes/api/userRoutes';
import AppError from './utils/appError';
import globalErrorHandler from './controllers/errorController';
import reviewRouter from './routes/api/reviewRoutes';
import shelfRouter from './routes/api/shelfRouter';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(mongoSanitize());
// app.use(hpp());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/books', bookRouter);
app.use('/api/v1/genres', genreRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/shelf', shelfRouter);

app.get('/', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  res.end('<h1>Welcome to Bibliophile Hub</h1>');
});

app.use(compression());

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} in this server`, 404));
});

app.use(globalErrorHandler);

export default app;
