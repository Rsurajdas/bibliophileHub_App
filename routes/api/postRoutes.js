import express from 'express';
import { protect, restrictedTo } from '../../controllers/authController';
import {
  addComment,
  getAllUserPost,
  getSocialPosts,
  likeAPost,
  unlikeAPost,
} from '../../controllers/postController';

const postRouter = express.Router();

// postRouter.get('/', protect, restrictedTo('user', 'author'), getAllUserPost);

postRouter.get(
  '/get-posts/:userId',
  protect,
  restrictedTo('user', 'author'),
  getAllUserPost,
);
postRouter.get(
  '/social-posts',
  protect,
  restrictedTo('user', 'author'),
  getSocialPosts,
);
postRouter.post(
  '/:postId/like',
  protect,
  restrictedTo('user', 'author'),
  likeAPost,
);
postRouter.post(
  '/:postId/unlike',
  protect,
  restrictedTo('user', 'author'),
  unlikeAPost,
);
postRouter.post(
  '/:postId/add-comment',
  protect,
  restrictedTo('user'),
  addComment,
);

export default postRouter;

/**
 * @swagger
 * components:
 *   schemas:
 *     Posts:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the post
 *         user:
 *           type: object
 *           properties:
 *             _id:
 *              type: string
 *             name:
 *              type: string
 *             photo:
 *              type: string
 *         book:
 *           type: object
 *           properties:
 *            _id:
 *              type: string
 *              description: The auto-generated id of the book
 *            age_group:
 *              type: string
 *              description: Age group of the book
 *            amazon_product_url:
 *              type: string
 *              description: Amazon Buy link
 *            author:
 *              type: object
 *              properties:
 *                  _id:
 *                    type: string
 *                  name:
 *                    type: string
 *                  photo:
 *                    type: string
 *                  followers:
 *                    type: array
 *                    items:
 *                      type: string
 *              description: Author of the book
 *            book_image:
 *              type: string
 *              description: Cover image of the book\
 *            createdAt:
 *              type: string
 *              format: date
 *              description: The date the book was added
 *            description:
 *              type: string
 *              description: Description of the book
 *            price:
 *              type: number
 *            primary_isbn10:
 *              type: string
 *            primary_isbn13:
 *              type: string
 *            title:
 *              type: string
 *            updated_date:
 *              type: string
 *              format: date
 *            genres:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                    id:
 *                      type: string
 *                    genre_name:
 *                      type: string
 *                    genre_name_encoded:
 *                      type: string
 *            buy_links:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                name:
 *                  type: string
 *                url:
 *                  type: string
 *         text:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date
 *         likes:
 *           type: array
 *           items:
 *             type: string
 *         comments:
 *           type: object
 *           properties:
 *              user:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  name:
 *                    type: string
 *                  photo:
 *                    type: string
 *              text:
 *                type: string
 *              createdAt:
 *                type: string
 *                format: date
 */

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: The posts API
 * /api/v1/posts/get-posts/{userId}:
 *   get:
 *     summary: Lists all the posts by user id
 *     tags: [Posts]
 *     security:
 *       - Authorization: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: get posts by user id
 *     responses:
 *       200:
 *         description: The list of the posts
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
 *                      posts:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/Posts'
 *
 * /api/v1/posts/social-posts:
 *   get:
 *     summary: Get all social posts
 *     tags: [Posts]
 *     security:
 *      - Authorization: []
 *     responses:
 *       200:
 *         description: Get all social posts
 *         contents:
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
 *                      posts:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/Posts'
 *       404:
 *         description: No user found by this id
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
