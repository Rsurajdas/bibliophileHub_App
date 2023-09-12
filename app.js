import path from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import mongoSanitize from 'express-mongo-sanitize';
import morgan from 'morgan';
import bookRouter from './routes/api/bookRoutes';
import genreRouter from './routes/api/genreRoutes';
import userRouter from './routes/api/userRoutes';
import AppError from './utils/appError';
import globalErrorHandler from './controllers/errorController';
import reviewRouter from './routes/api/reviewRoutes';
import shelfRouter from './routes/api/shelfRouter';
import postRouter from './routes/api/postRoutes';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    servers: [
      {
        url: 'https://boiling-wildwood-46640-30ec30629e36.herokuapp.com/',
      },
    ],
    info: {
      title: 'Bibliophile Hub',
      version: '1.0',
      description:
        "Find and read more books you'll love, and keep track of the books you want to read.",
      contact: {
        name: 'Suraj Kumar',
        email: 'surajkumar@gmail.com',
      },
    },
    components: {
      securitySchemes: {
        Authorization: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          value: 'Bearer <JWT token here>',
        },
      },
    },
  },
  apis: ['./routes/api/*.js'],
};

const swaggerDoc = swaggerJSDoc(options);

app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'client')));

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'img-src': ["'self'", 'https: data:'],
    },
  }),
);
app.use(cors());
app.use(express.json());
app.set('trust proxy', 1);
app.use(mongoSanitize());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use('/api/v1/books', bookRouter);
app.use('/api/v1/genres', genreRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/shelf', shelfRouter);
app.use('/api/v1/posts', postRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'client', 'index.html'));
});

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} in this server`, 404));
});

app.use(globalErrorHandler);

export default app;
