/**
 * @swagger
 * components:
 *   schemas:
 *     Books:
 *       type: object
 *       required:
 *         - title
 *         - publisher
 *         - price
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         age_group:
 *           type: string
 *           description: Age group of the book
 *         amazon_product_url:
 *           type: string
 *           description: Amazon Buy link
 *         author:
 *           type: object
 *           properties:
 *              id:
 *                type: string
 *              name:
 *                type: string
 *              photo:
 *                type: string
 *              followers:
 *                type: array
 *                items:
 *                  type: string
 *           description: Author of the book
 *         book_image:
 *           type: string
 *           description: Cover image of the book\
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *         description:
 *           type: string
 *           description: Description of the book
 *         price:
 *           type: number
 *         primary_isbn10:
 *           type: string
 *         primary_isbn13:
 *           type: string
 *         title:
 *           type: string
 *         updated_date:
 *           type: string
 *           format: date
 *         genres:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *                id:
 *                  type: string
 *                genre_name:
 *                  type: string
 *                genre_name_encoded:
 *                  type: string
 *         buy_links:
 *           type: object
 *           properties:
 *             id:
 *              type: string
 *             name:
 *              type: string
 *             url:
 *              type: string
 */

import express from 'express';
import {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
  searchBook,
  getAllBooksByGenre,
  aggregationBook,
} from '../../controllers/bookController';
import { protect, restrictedTo } from '../../controllers/authController';
import reviewRouter from './reviewRoutes';

const bookRouter = express.Router();

// Nested Routes
bookRouter.use('/:bookId/reviews', reviewRouter);
bookRouter
  .route('/')
  .get(getAllBooks)
  .post(protect, restrictedTo('author', 'admin'), createBook);
bookRouter.get('/search', searchBook);
bookRouter
  .route('/:id')
  .get(protect, getBook)
  .patch(protect, restrictedTo('author', 'admin'), updateBook)
  .delete(protect, restrictedTo('author', 'admin'), deleteBook);
bookRouter.get('/get-books/:genreId', getAllBooksByGenre);
bookRouter.get('/genres/grouped-by-genres', aggregationBook);

export default bookRouter;

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books API
 * /api/v1/books:
 *   get:
 *     summary: Lists all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 results:
 *                   type: number
 *                 data:
 *                   type: object
 *                   properties:
 *                      books:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/Books'
 *
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Books'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                data:
 *                  type: object
 *                  properties:
 *                    book:
 *                      $ref: '#/components/schemas/Books'
 *       500:
 *         description: Some server error
 * /api/v1/books/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     security:
 *        - Authorization: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         contents:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                data:
 *                  type: object
 *                  properties:
 *                    book:
 *                      $ref: '#/components/schemas/Books'
 *       404:
 *         description: No book found with that Id
 *   patch:
 *     summary: Update a book by id
 *     tags: [Books]
 *     security:
 *        - Authorization: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Books'
 *     responses:
 *       200:
 *         description: The book response by id
 *         contents:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                data:
 *                  type: object
 *                  properties:
 *                    book:
 *                      $ref: '#/components/schemas/Books'
 *       404:
 *         description: No book found with that Id
 *   delete:
 *     summary: Delete a book by id
 *     tags: [Books]
 *     security:
 *        - Authorization: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Books'
 *       404:
 *         description: No book found with that Id
 * /api/v1/books/search:
 *   get:
 *     summary: Search books by book title
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         required: true
 *         description: search books by book title
 *     responses:
 *       200:
 *         description: The books response by title case sensitive
 *         contents:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                data:
 *                  type: object
 *                  properties:
 *                    book:
 *                      $ref: '#/components/schemas/Books'
 * /api/v1/books/get-books/{genreId}:
 *   get:
 *     summary: Get books by genre id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: genreId
 *         schema:
 *           type: string
 *         required: true
 *         description: get books by genre id
 *     responses:
 *       200:
 *         description: Get books by genre id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Books'
 * /api/v1/books/genres/grouped-by-genres:
 *   get:
 *     summary: Get all books categorized by genres
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Get all books categorized by genres
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Books'
 *
 */
