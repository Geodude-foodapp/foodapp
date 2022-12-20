// import packages
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import router from './routes';
import path from 'path';
import cookieParser from 'cookie-parser';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
dotenv.config();
// instantiate new sql instance - connections are made lazily
export const sql = postgres(process.env.PG_URI as string);
// initialize server
const app = express();
// handle json reqs and forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// start cookieParser
app.use(cookieParser());
/// serve static
app.use('/', express.static(path.join(__dirname, '../../build')));
// assert router
app.use('/api', router);

// Express global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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
app.use('*', (req, res) =>
  res.status(404).send('Our Error 404: No content found')
);

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
