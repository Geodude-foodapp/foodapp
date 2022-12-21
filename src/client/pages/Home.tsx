import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import RecipeCard from '../components/RecipeCard';
import { UserData } from '../../Types';

type HomeProps = {
  userData: UserData;
};
export default ({ userData }: HomeProps) => {
  const removeFavorite = (recipeId: number): void => {
    axios
      .delete('/api/favorite', { data: recipeId })
      .then(({ data }) => console.log(data))
      .catch((err) => console.error(err));
  };

  const recipeCards = userData.favorites.map(
    ({ id, title, image, sourceurl }) => (
      <RecipeCard
        key={`recipe-${id}`}
        recipeId={id}
        title={title}
        image={image}
        sourceurl={sourceurl}
        type='favorite'
        removeFavorite={() => removeFavorite(id)}
      />
    )
  );

  return (
    <section id='home'>
      {/* MAIN DISPLAY */}
      <h1>Home</h1>
      {recipeCards.length === 0 && <p>No favorited recipes... yet!</p>}
      {recipeCards}
      <Navbar />
    </section>
  );
};
