import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';

export default () => {
  const [favorites, setFavorites] = useState([1, 2, 3]);
  // const [isUserDataFetched, setUserDataFetched];
  // // TODO: fetch recipe data
  // useEffect(() => {}, []);

  const recipeCards = favorites.map((el) => <RecipeCard key={el} />);

  const getRecipes = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hit api for recipe results
  };

  return (
    <section id='home'>
      {/* MAIN DISPLAY */}
      <h1>Home</h1>
      {recipeCards}
    </section>
  );
};
