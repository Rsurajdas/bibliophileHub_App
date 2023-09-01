import express from 'express';
import {
  getAllGenre,
  createGenre,
  getGenre,
  updateGenre,
  deleteGenre,
} from '../../controllers/genreController';
import { protect, restrictedTo } from '../../controllers/authController';

const genreRouter = express.Router();

genreRouter
  .route('/')
  .get(getAllGenre)
  .post(protect, restrictedTo('admin'), createGenre);
genreRouter
  .route('/:id')
  .get(getGenre)
  .patch(protect, restrictedTo('admin'), updateGenre)
  .delete(protect, restrictedTo('admin'), deleteGenre);

export default genreRouter;

/**
 * @swagger
 * components:
 *   schemas:
 *     Genres:
 *       type: object
 *       required:
 *         - genre_name
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the genre
 *         genre_name:
 *           type: string
 *           description: Name of the genre, the name should be unique and at least 3 characters long.
 *         genre_name_encoded:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Genres
 *   description: The genres API
 * /api/v1/genres:
 *   get:
 *     summary: Lists all the genres
 *     tags: [Genres]
 *     responses:
 *       200:
 *         description: The list of the genres
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
 *                      genres:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/Genres'
 *
 *   post:
 *     summary: Create a new genre
 *     tags: [Genres]
 *     security:
 *      - Authorization: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Genres'
 *     responses:
 *       200:
 *         description: The created genre.
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
 *                    genre:
 *                      $ref: '#/components/schemas/Genres'
 *       500:
 *         description: Some server error
 * /api/v1/genres/{id}:
 *   get:
 *     summary: Get the genre by id
 *     tags: [Genres]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The genre id
 *     responses:
 *       200:
 *         description: The genre response by id
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
 *                    genre:
 *                      $ref: '#/components/schemas/Genres'
 *       404:
 *         description: No genre found with that Id
 *   patch:
 *     summary: Update a genre by id
 *     tags: [Genres]
 *     security:
 *        - Authorization: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The genre id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Genres'
 *     responses:
 *       200:
 *         description: The genre response by id
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
 *                    genre:
 *                      $ref: '#/components/schemas/Genres'
 *       404:
 *         description: No genre found with that Id
 *   delete:
 *     summary: Delete a genre by id
 *     tags: [Genres]
 *     security:
 *        - Authorization: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The genre id
 *     responses:
 *       200:
 *         description: The genre response by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genres'
 *       404:
 *         description: No genre found with that Id
 *
 *
 */
