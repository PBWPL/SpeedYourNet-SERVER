const rootRouter = require('express').Router();

rootRouter.get('/', (req, res, next) => {
  res.status(200).json({message: 'Server is running!', success: true});
  res.end();
});

rootRouter.post('/upload', (req, res, next) => {
  if (req.header('content-length') !== '0') {
    res.status(200).json({message: 'File uploaded!', success: true});
  } else {
    res.status(400).json({message: 'Something is wrong!', success: false});
  }
  res.end();
});

module.exports = rootRouter;