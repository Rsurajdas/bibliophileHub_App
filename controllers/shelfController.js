import Shelf from '../models/shelfModel';
import { catchAsync } from '../utils/catchAsync';
import AppError from '../utils/appError';
import { deleteOne } from './handlerFunctions';

export const getAllShelf = catchAsync(async (req, res, next) => {
  const shelf = await Shelf.find();

  res.status(200).json({
    status: 'success',
    results: shelf.length,
    data: {
      shelf,
    },
  });
});

export const createShelf = catchAsync(async (req, res, next) => {
  const shelf = await Shelf.create(req.body);

  res.status(201).json({
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

export const deleteShelf = deleteOne(Shelf);
