import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import Sidebar from '../modals/Sidebar';

export default () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [favorites, setFavorites] = useState([1, 2, 3]);
  // TODO: fetch recipe data
  const recipeCards = favorites.map((el) => <RecipeCard key={el} />);

  const getRecipes = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hit api for recipe results
  };

  return (
    <section id='home'>
      {/* HIDDEN SIDEBAR */}
      {sidebarIsOpen && (
        <Sidebar closeSidebar={() => setSidebarIsOpen(false)} />
      )}
      {/* MAIN DISPLAY */}
      <h1>Home</h1>
      {recipeCards}
      <button onClick={() => setSidebarIsOpen(true)}>
        {/* TODO: use hamburger icon */}
        Sidebar
      </button>
    </section>
  );
};
