import { RequestHandler } from "express";
import {client} from '../server'
interface favsController {
  getUserInfo: RequestHandler;
}

const favsController: favsController = {
  getUserInfo: (req, res, next) => { // this middleware follows from our jwt verify
    const id = res.locals.id // assuming this comes from verify. should really use id
    // SELECT recipe_id from usersrecipes where user_id=${id};
    const recipeQ: string = `SELECT recipe_id from usersrecipes where user_id=${id}`
    const userData: {} = {};
    client.query(recipeQ, (err, res) => {

    })
    // SELECT userspreferences.diet, userspreferences.intolerance, userspreferences.exclude
    // FROM userspreferences
    // WHERE user_id=1;
    
  }

};

export default favsController;