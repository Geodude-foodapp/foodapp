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
  const qryStr = 'SELECT * FROM users WHERE name = VALUES($1)';
  client.query(qryStr, [name])
  // compare hashedpw - if true, move to next
  // if not send res.locals.loginError to frontend -> frontend alerts user (pw does not match, or user + pw not correct)
    .then(async (data: {rows: {id: number, name: string, password: string}[]}) => {
      const pwMatch = await bcrypt.compare(password, data.rows[0].password);
      if (!pwMatch){
        return res.status(200).json({log: 'Password was not a match!'});
      }
      res.locals.id = data.rows[0].id;
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

// add new user to the database
  createUser: (req, res, next) => {
    const { name, password, intolerance, diet } = req.body;
    bcrypt.hash(password, SALT_WORK_FACTOR, async (err, hash) => {
      try {
        await client.query('BEGIN'); 
        const userStr = `
          INSERT INTO users(name, password)
          VALUES ($1, $2)`;
        const result: any = await client.query(userStr, [name, hash]);
        const prefStr = `INSERT INTO userspreferences (user_id, diet, intolerance)
          VALUES ($1, $2, $3)`;
        await client.query(prefStr, [result[0].id, diet, intolerance]);
        await client.query('COMMIT');
        res.locals.id = result[0].id;
        return next();
        } catch(e) {
            await client.query('ROLLBACK');
            return next({
              log: 'Error in userController.createUser',
              status: 400,
              message: {err: err}
            });
          }  
    })
  }
};

export default userController; 
