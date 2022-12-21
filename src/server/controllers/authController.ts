import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

type AuthController = {
  addJwt: RequestHandler;
  verifyJwt: RequestHandler;
};

// need jwt secret from .env file
const secret = process.env.JWT_SECRET as string;
// ! no need for cookies irght/
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
    const token = req.headers['x-access-token'];
    if (!token) return res.status(404).send('No token!'); 
    else {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({auth: false, message: 'authentication failed'});
      })
      // where we will send all the info like favs and suerdata
    }
  }

};
export default authController;