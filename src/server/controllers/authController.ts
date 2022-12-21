import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verify } from 'crypto';

type AuthController = {
  addJwt: RequestHandler;
  verifyJwt: RequestHandler;
};

// need jwt secret from .env file
const secret = process.env.JWT_SECRET as string;

const authController: AuthController = {
// add jwt for when user logs in or signs up 
// for now, ignore id, we may pass along in future
  addJwt: (req, res, next) => {
    const {name} = res.locals;
    // take username, declare token, that is jwt.sign(id, secret, expiration time)
    const token = jwt.sign(name, secret, {expiresIn: 3000});
   // directly return with res - auth, token, username - frontend sends it back
    return res.status(200).json({auth: true, token, result: name });
  },
  // verifyJWT
  verifyJwt: (req, res, next) => {

  }

};
export default authController;