import React from 'react';

type RecipeCardProps = {
  recipeId: number;
  title: string;
  image: string;
  sourceUrl: string;
  type: 'favorite' | 'search';
  addFavorite?: () => void;
  removeFavorite?: () => void;
};
export default ({
  recipeId,
  title,
  image,
  sourceUrl,
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
      <a href={sourceUrl}>Go to recipe site</a>
      <button onClick={handleClick}></button>
    </div>
  );
};
