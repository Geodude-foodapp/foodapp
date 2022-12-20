import { RequestHandler } from 'express';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';


type UserController = {
  loginUser: RequestHandler;
};

export const userController: UserController = {};
// verify username and password match in the db
userController.loginUser = (req, res, next) => {
  // info from req.body
  const {username, password} = req.body;
  // find in sql db
  const values = [username];
  const qryStr = 'SELECT * FROM users WHERE username = VALUES($1)';
  db.query(qryStr, values)
  // compare hashedpw - if true, move to next
  // if not send res.locals.loginError to frontend -> frontend alerts user (pw does not match, or user + pw not correct)
  .then(async (data: {rows: {password: string}[]}) => {
    const pwMatch = await bcrypt.compare(password, data.rows[0].password);
    if (pwMatch){
      return next();
    }
    else {
      res.locals.pwError = 'Password error in user login';    
    }
  })
  // larger catch error, if username does not exist -> res.locals.noUsrname - true -> alert user and redirect to signup 
  .catch((err: Error) => {
    return next({
    log: 'Error retrieving user, username does not exist.',
    status: 500,
    message: { err: `${err} occurred in userController middleware` },
    })
  })
  
};



























export default userController;