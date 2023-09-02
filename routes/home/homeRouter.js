import express from 'express';
import path from 'path';

const homeRouter = express.Router();

homeRouter.get('/*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '.../../../../', 'public', 'client', 'index.html'),
  );
});

export default homeRouter;
