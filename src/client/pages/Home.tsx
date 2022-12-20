import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import Sidebar from '../modals/Sidebar';
import SearchModal from '../modals/SearchModal';

export default () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false);
  const [favorites, setFavorites] = useState([1, 2, 3]);
  // TODO: fetch recipe data
  const recipeCards = favorites.map((el) => <RecipeCard />);

  const getRecipes = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hit api for recipe results
  };

  return (
    <>
      {/* HIDDEN SIDEBAR */}
      {sidebarIsOpen && (
        <Sidebar closeSidebar={() => setSidebarIsOpen(false)} />
      )}
      {/* MAIN DISPLAY */}
      <h1>Home</h1>
      {recipeCards}
      <div>
        <form onSubmit={getRecipes}>
          <input
            placeholder='Search Recipes'
            type='text'
          />
        </form>
        <button onClick={() => setSidebarIsOpen(true)}>
          {/* TODO: use hamburger icon */}
          Sidebar
        </button>
      </div>
    </>
  );
};
