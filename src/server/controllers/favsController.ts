import { RequestHandler } from "express";
import {client} from '../server'
import * as dotenv from 'dotenv'
dotenv.config();

interface favsController {
  getUserInfo: RequestHandler;
  addFavorite: RequestHandler;
  recipeSearch: RequestHandler;
}

interface userData {
  name: string,
  diet?: string,
  intolerance?: string,
  favorites?: {
    id: number,
    title: string,
    image: string,
    sourceurl: string
  }[]
}

const favsController: favsController = {
  getUserInfo: async (req, res, next) => { // this middleware follows from our jwt verify

    const id = res.locals.id; // assuming this comes from verify. should really use id
    //console.log(id);
    // SELECT recipe_id from usersrecipes where user_id=${id};
    let userData: userData = {name: 'hi' };
    const recipeQ: string = `SELECT recipe_id from usersrecipes where user_id=${id}`
    const preferencesQ: string = `
    SELECT users.name, userspreferences.diet, userspreferences.intolerance, userspreferences.exclude
    FROM users
    INNER JOIN userspreferences
    ON users.id=userspreferences.user_id
    WHERE users.id=${id}
    `;
    try {
      await client.query('BEGIN');
      const userInfo: any = await client.query(preferencesQ); // [{diet: vegan, intolerance: gluten,sodium}]
      const favRecipes: any = await client.query(recipeQ); // array of rows for recipe ids the user saved
      await client.query('COMMIT');
      // want to access first result here, get .diet and .intolerance
      // const {name, diet, intolerance} = userInfo[0];
      // userData = {
      // name,
      // diet,
      // intolerance
      // }
      userData.name = userInfo.rows[0].name;
      userData.diet = userInfo.rows[0].diet;
      userData.intolerance = userInfo.rows[0].intolerance;
      // get recipe information bulk
      const recipeIDs: number[] = favRecipes.rows.map((row: any) => {
        return row.recipe_id;
      })
      const recipeResponse = await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIDs.join(',')}&apiKey=${process.env.API_KEY}`);
      const recipeData: any = await recipeResponse.json();
      // console.log(recipeData);
      // want the value of recipeID for each object in this array
      userData.favorites = recipeData.map((recipe: any) => {
        const { id, title, image, sourceurl } = recipe;
        return { id, title, image, sourceurl};
      }) // api call
      // console.log(userData);
      res.locals.userData = userData;
      return next();
    } catch(e) {
      await client.query('ROLLBACK');
            return next({
              log: 'Error in favsController.getUserInfo',
              status: 400,
              message: {err: e}
            });
    } 
  },
  addFavorite: (req, res, next) => {
    // input: user id, recipe id
  },
  // adding search controller components here for time save, ideally migrate to different file in future :)
  recipeSearch: async (req, res, next) => {
    // preferences comes from front-end
    // const {diet, intolerance} = req.body;
    console.log(req.body)
    const diet = req.body.diet
    const intolerance = req.body.intolerance
    console.log(diet)
    console.log(intolerance)
    // request to https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&intolerances=${intolerance}
    const recipes = await fetch(`https://api.spoonacular.com/recipes/random?tags=${diet},${intolerance}&number=10&apiKey=${process.env.API_KEY}`)
    // process response for frontend
    // contract says id, title, image, sourceurl
    const recipeData = await recipes.json();
    console.log(recipeData);
    const recipeMap = recipeData.map((recipe: any) => {
      return {
        id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      sourceurl: recipe.sourceurl
      }
    })
    res.locals.recipes = recipeMap;
    return next();
  }

};

export default favsController;