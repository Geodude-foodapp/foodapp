import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import { RecipeData, UserData } from '../../Types';

type HomeProps = {
  setUserData: (data: UserData) => void;
};
export default ({ setUserData }: HomeProps) => {
  const [favorites, setFavorites] = useState<RecipeData[]>([]);
  const [isUserDataFetched, setIsUserDataFetched] = useState(false);
  // TODO: fetch recipe data
  useEffect(() => {
    if (isUserDataFetched) return;

    axios
      .get('/api/user')
      .then(({ data }) => {
        setIsUserDataFetched(true);
        setFavorites(data.favorites);
        setUserData(data.userData);
      })
      .catch((err) => console.error(err));
  }, []);

  const removeFavorite = (recipeId: number): void => {
    axios
      .delete('/api/favorite', { data: recipeId })
      .then(({ data }) => console.log(data))
      .catch((err) => console.error(err));
  };

  const recipeCards = favorites.map(({ id, title, image, sourceurl }) => (
    <RecipeCard
      key={`recipe-${id}`}
      recipeId={id}
      title={title}
      image={image}
      sourceurl={sourceurl}
      type='favorite'
      removeFavorite={() => removeFavorite(id)}
    />
  ));

  return (
    <section id='home'>
      {/* MAIN DISPLAY */}
      <h1>Home</h1>
      {recipeCards}
    </section>
  );
};
