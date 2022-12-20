
// import packages
import express from 'express';
// import cookieParser from 'cookie-parser';
import router from './routes';
import path from 'path';
// initialize server
const app = express();
// handle json reqs and forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// start cookieParser
// app.use(cookieParser());
// assert router
app.use('/', router);

// Express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log, ' ', err);
  return res.status(errorObj.status).json(err);
});

// unknown requests
app.use('*', (req, res) => res.status(404).send('Error 404: No content found'));

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;