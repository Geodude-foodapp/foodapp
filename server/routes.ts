import express from 'express';
// Import all controllers
import userController from './controllers/userController';
import favsController from './controllers/favsController';
import cookieController from './controllers/cookieController';
// Initialize an express router
const router = express.Router();

// login and sign up post
router.post('/login', /* middelware */(req, res) => {
  return res.status(200).send();
});
// favorites get
router.get('/favorites', /* middelware */(req, res) => {
  return res.status(200).send();
});
// add favorites post
router.post('/favorites', /* middelware */(req, res) => {
  return res.status(200).send();
});
// update recipes put
router.put('/recipe-book', /* middelware */(req, res) => {
  return res.status(200).send();
});
// update settings put
router.put('/settings', /* middelware */(req, res) => {
  return res.status(200).send();
});
// from search, add to favorites
router.post('/search', /* middelware */(req, res) => {
  return res.status(200).send();
});
// search post? 
router.post('/search', /* middelware */(req, res) => {
  return res.status(200).send();
});

export default router;