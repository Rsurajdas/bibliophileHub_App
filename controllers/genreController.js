import Genre from '../models/genreModel';

export const getAllGenre = async (req, res) => {
  try {
    const genres = await Genre.find().populate({ path: 'books' });
    res.status(200).json({
      status: 'success',
      results: genres.length,
      data: {
        genres,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export const createGenre = async (req, res) => {
  try {
    console.log(req.body);
    const genre = await Genre.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        genre,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export const getGenre = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id).populate({
      path: 'books',
    });
    res.status(200).json({
      status: 'success',
      data: {
        genre,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export const updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        genre,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export const deleteGenre = async (req, res) => {
  try {
    await Genre.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export const addBooks = async (req, res) => {
  try {
    const updatedGenre = await Genre.findByIdAndUpdate(
      req.params.id,
      { $push: { books: req.body.books } },
      {
        new: true,
        runValidators: true,
      },
    ).populate('books');
    res.status(200).json({
      status: 'success',
      data: {
        genre: updatedGenre,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
