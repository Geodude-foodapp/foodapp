import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import {client} from '../server';

const SALT_WORK_FACTOR = 10;
interface UserController {
  loginUser: RequestHandler;
  createUser: RequestHandler;
};

const userController: UserController = {
// verify username and password match in the db
  loginUser: (req, res, next) => {
  // info from req.body
  const {name, password} = req.body;
  // find in sql db
  const values = [name];
  const qryStr = 'SELECT * FROM users WHERE name = VALUES($1)';
  client.query(qryStr, values)
  // compare hashedpw - if true, move to next
  // if not send res.locals.loginError to frontend -> frontend alerts user (pw does not match, or user + pw not correct)
    .then(async (data: {rows: {password: string}[]}) => {
      const pwMatch = await bcrypt.compare(password, data.rows[0].password);
      if (!pwMatch){
        return res.status(200).json({log: 'Password was not a match!'});
    }
      res.locals.name = name;
      return next();
    })
    // larger catch error, if username does not exist -> res.locals.noUsrname - true -> alert user and redirect to signup 
    .catch((err: Error) => {
      return next({
        log: 'Error retrieving user, username does not exist.',
        status: 500,
        message: { err: `${err} occurred in userController middleware` },
      })
    })
},

//add new user to the database
  createUser: (req, res, next) => {
    const { name, password, intolerance, diet, exclude } = req.body;
    bcrypt.hash(password, SALT_WORK_FACTOR, (err, hash) => {
      //TODO: update and sync with database. what is are the col names
      const qryStr = 'INSERT INTO users(name, password, diet, intolerance, exclude) VALUES ($1, $2, $3, $4, $5)';
      client.query(qryStr, [name, hash, diet, intolerance, exclude])
        .then(() => {
          res.locals.name = name
          return next()
        })
        .catch((err: Error) => {
          return next({
            log: 'Error in userController.createUser',
            status: 400,
            message: {er: err}
          });
        })
    })
  }};

export default userController; 
