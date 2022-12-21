import express from 'express';
// Import all controllers
import userController from './controllers/userController';
import favsController from './controllers/favsController';
import authController from './controllers/authController';
// Initialize an express router
const router = express.Router();

// login post
router.post('/login', userController.loginUser, authController.addJwt);
// signup route
router.post('/signup', userController.createUser, authController.addJwt);
// get request to auth for login and sign up verification
router.get('/auth', authController.verifyJwt, (req, res) => {
  return res.status(200).send();
});
// favorites get
router.get('/favorites', authController.verifyJwt, favsController.getUserInfo, (req, res) => {
  return res.status(200).json(res.locals.userData);
});
// add favorites post
router.post('/favorites', /* middelware */(req, res) => {
  return res.sendStatus(200);
});
// update settings put
router.put('/settings', /* middelware */(req, res) => {
  return res.status(200).send();
});
// from search, add to favorites
router.post('/search', favsController.recipeSearch, (req, res) => {
  return res.status(200).json(res.locals.recipes);
});
// search post? 
// router.post('/search', /* middelware */(req, res) => {
//   return res.status(200).send();
// });

export default router;