import React from 'react';

type RecipeCardProps = {
  recipeId: number;
  title: string;
  image: string;
  sourceurl: string;
  type: 'favorite' | 'search';
  addFavorite?: () => void;
  removeFavorite?: () => void;
};
export default ({
  recipeId,
  title,
  image,
  sourceurl,
  type,
  addFavorite,
  removeFavorite,
}: RecipeCardProps) => {
  const handleClick = type === 'favorite' ? removeFavorite : addFavorite;
  return (
    <div className='recipe-card'>
      <h1>{title}</h1>
      <img
        src={image}
        alt='recipe-image'
      />
      <a href={sourceurl}>Go to recipe site</a>
      <button onClick={handleClick}></button>
    </div>
  );
};
