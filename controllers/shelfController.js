import Shelf from '../models/shelfModel';
import Book from '../models/bookModel';
import { catchAsync } from '../utils/catchAsync';
import AppError from '../utils/appError';
import Post from '../models/postModel';
import Review from '../models/reviewModel';

export const getAllShelf = catchAsync(async (req, res, next) => {
  const shelves = await Shelf.find({ user: req.user._id });

  res.status(200).json({
    status: 'success',
    results: shelves.length,
    data: {
      shelves,
    },
  });
});

export const createShelf = catchAsync(async (req, res, next) => {
  if (!req.body.shelf_name) {
    return next(new AppError('Shelf name cant be empty', 405));
  }
  const shelf = new Shelf({
    shelf_name: req.body.shelf_name,
    user: req.user._id,
  });

  await shelf.save();

  res.status(201).json({
    status: 'success',
    data: {
      shelf,
    },
  });
});

export const getShelf = catchAsync(async (req, res, next) => {
  const shelf = await Shelf.findById(req.params.id).populate({
    path: 'books.book',
  });
  if (!shelf) {
    return next(new AppError('No shelf found with that Id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      shelf,
    },
  });
});

export const updateShelf = catchAsync(async (req, res, next) => {
  const shelf = await Shelf.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!shelf) {
    return next(new AppError('No shelf found with that Id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      shelf,
    },
  });
});

export const deleteShelf = catchAsync(async (req, res, next) => {
  const shelf = await Shelf.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!shelf) {
    return next(new AppError('No shelf found by this id', 404));
  }

  await shelf.remove();

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

export const addBook = catchAsync(async (req, res, next) => {
  const userShelves = await Shelf.find({ user: req.user._id });

  if (!userShelves) {
    return next(new AppError('No shelves found for the user', 404));
  }

  for (const shelf of userShelves) {
    const bookExistsInShelf = shelf.books.some((bookObj) =>
      bookObj.book.equals(req.params.bookId),
    );
    if (bookExistsInShelf) {
      return next(
        new AppError('Book already exists in a shelf for this user', 400),
      );
    }
  }

  const userShelf = await Shelf.findOne({
    user: req.user._id,
    _id: req.params.shelfId,
  });

  if (!userShelf) {
    return next(new AppError('User Shelf not found', 404));
  }

  const bookAlreadyInShelf = userShelf.books.some((bookObj) =>
    bookObj.book.equals(req.params.bookId),
  );
  if (bookAlreadyInShelf) {
    return next(new AppError('Book already exits in the shelf', 400));
  }

  userShelf.books.push({ book: req.params.bookId, readingProgress: 0 });
  await userShelf.save();

  const post = new Post({
    user: req.user._id,
    book: req.params.bookId,
    text: `${req.user.name} added a book to the ${userShelf.shelf_name} shelf`,
  });
  await post.save();

  res.status(200).json({
    status: 'success',
    message: 'Book added to the shelf successfully ',
  });
});

// export const getAllBooksFromUserShelves = catchAsync(async (req, res, next) => {
//   const userShelves = await Shelf.find({ user: req.user._id });

//   if (!userShelves) {
//     return next(new AppError('No shelves found for the user', 404));
//   }

//   const bookObjects = userShelves.flatMap((shelf) => shelf.books);

//   const bookIds = bookObjects.map((bookObj) => bookObj.book);

//   const books = await Book.find({ _id: { $in: bookIds } });

//   const booksWithProgress = bookObjects.map((bookObj) => {
//     const bookId = bookObj.book.toString();
//     const book = books.find((book) => book._id.toString() === bookId);
//     return {
//       book,
//       readingProgress: bookObj.readingProgress,
//     };
//   });

//   res.status(200).json({
//     status: 'success',
//     results: booksWithProgress.length,
//     data: {
//       books: booksWithProgress,
//     },
//   });
// });

export const getAllBooksFromUserShelves = catchAsync(async (req, res, next) => {
  const userShelves = await Shelf.find({ user: req.user._id });

  if (!userShelves) {
    return next(new AppError('No shelves found for the user', 404));
  }

  const bookObjects = userShelves.flatMap((shelf) => shelf.books);

  const bookIds = bookObjects.map((bookObj) => bookObj.book);

  const books = await Book.find({ _id: { $in: bookIds } });

  const booksWithShelves = await Promise.all(
    books.map(async (book) => {
      const shelvesContainingBook = await Shelf.find({
        user: req.user._id,
        'books.book': book._id,
      });

      const readingProgress = bookObjects.find(
        (bookObj) => bookObj.book.toString() === book._id.toString(),
      ).readingProgress;

      // Retrieve the user's review for the current book
      const userReview = await Review.findOne({
        user: req.user._id,
        book: book._id,
      });

      return {
        book,
        shelves: shelvesContainingBook.map((shelf) => ({
          shelf_id: shelf._id,
          shelf_name: shelf.shelf_name,
        })),
        readingProgress,
        review: userReview,
      };
    }),
  );

  res.status(200).json({
    status: 'success',
    results: booksWithShelves.length,
    data: {
      books: booksWithShelves,
    },
  });
});

export const removeBook = catchAsync(async (req, res, next) => {
  const userShelf = await Shelf.findOne({
    user: req.user._id,
    _id: req.params.shelfId,
  });

  if (!userShelf) {
    return next(new AppError('No shelves found for the user', 404));
  }

  const updatedBooks = userShelf.books.filter(
    (bookObj) => bookObj.book.toString() !== req.params.bookId,
  );

  if (updatedBooks.length === userShelf.books.length) {
    return next(new AppError('Book not found in the shelf', 404));
  }

  userShelf.books = updatedBooks;
  await userShelf.save();

  res.status(200).json({
    status: 'success',
    message: 'Book removed from the shelf successfully',
  });
});

export const getShelvesContainingBook = catchAsync(async (req, res, next) => {
  const shelvesWithBook = await Shelf.find({
    user: req.user._id,
    'books.book': req.params.bookId,
  });

  if (!shelvesWithBook || shelvesWithBook.length === 0) {
    return next(new AppError('No shelves found containing the book', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      shelves: shelvesWithBook,
    },
  });
});

export const getBooksFromCurrentlyReadingShelf = catchAsync(
  async (req, res, next) => {
    const currentShelf = await Shelf.findOne({
      user: req.params.userId,
      shelf_name: 'Currently Reading',
    }).populate('books.book');

    if (!currentShelf) {
      return next(
        new AppError('User does not have a currently reading shelf', 404),
      );
    }

    const bookFromCurrentlyReadingShelf = currentShelf.books.map((bookObj) => ({
      book: bookObj.book,
      readingProgress: bookObj.readingProgress,
    }));

    res.status(200).json({
      status: 'success',
      // results: currentShelf.books.length,
      data: {
        books: bookFromCurrentlyReadingShelf,
      },
    });
  },
);

export const updateReadingProgress = catchAsync(async (req, res, next) => {
  const currentShelf = await Shelf.findOne({
    user: req.user._id,
    shelf_name: 'Currently Reading',
  });

  if (!currentShelf) {
    return next(
      new AppError('User does not have a currently reading shelf', 404),
    );
  }

  const bookIndexToUpdate = currentShelf.books.findIndex(
    (bookObj) => bookObj.book.toString() === req.params.bookId,
  );

  if (bookIndexToUpdate === -1) {
    return next(
      new AppError('Book not found in the currently reading shelf', 404),
    );
  }

  currentShelf.books[bookIndexToUpdate].readingProgress =
    req.body.readingProgress;

  if (req.body.readingProgress === 100) {
    const bookToMove = currentShelf.books.splice(bookIndexToUpdate, 1)[0];
    await currentShelf.save();

    const readShelf = await Shelf.findOne({
      user: req.user._id,
      shelf_name: 'Read',
    });

    if (!readShelf) {
      return next(new AppError('User does not have a "Read" shelf', 404));
    }

    readShelf.books.push(bookToMove);
    await readShelf.save();
  } else {
    await currentShelf.save();
  }

  res.status(200).json({
    status: 'success',
    message: 'Reading progress updated successfully',
  });
});

export const updateBookShelf = catchAsync(async (req, res, next) => {
  const fromShelfDoc = await Shelf.findOne({
    user: req.user._id,
    _id: req.body.fromShelfId,
  });

  const toShelfDoc = await Shelf.findOne({
    user: req.user._id,
    _id: req.body.toShelfId,
  });

  if (!fromShelfDoc || !toShelfDoc) {
    return next(new AppError('Shelves not found for the user', 404));
  }

  const bookIndex = fromShelfDoc.books.findIndex(
    (bookObj) => bookObj.book.toString() === req.params.bookId,
  );

  if (bookIndex === -1) {
    return next(new AppError('Book not found in the source shelf', 404));
  }

  const bookToMove = fromShelfDoc.books.splice(bookIndex, 1)[0];
  toShelfDoc.books.push(bookToMove);

  await fromShelfDoc.save();
  await toShelfDoc.save();

  res.status(200).json({
    status: 'success',
    message: 'Book moved to the new shelf successfully',
  });
});
