import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { UserData, Diet, Intolerance } from '../../Types';
import { cuisineArr, mealTypesArr } from '../utils/dataObjects';

type SearchProps = {
  userData: UserData;
};
type SearchFormData = {
  diet?: Diet;
  intolerance: { [key in Intolerance]: boolean };
};
export default ({ userData }: SearchProps) => {
  const [formData, setFormData] = useState();

  const cuisineOptions = cuisineArr.map((cuisine) => (
    <option value={cuisine}>{cuisine}</option>
  ));

  const mealTypeOptions = mealTypesArr.map((mealType) => (
    <option value={mealType}>{mealType}</option>
  ));

  function handleSubmit() {}

  return (
    <section id='search'>
      <h1>Search Page</h1>
      <form onSubmit={handleSubmit}>
        <h1>Narrow down your search</h1>
        <p>Please fill out at least one search field</p>

        <label htmlFor='cuisine'>Choose a cuisine</label>
        <select
          name='cuisine'
          id='cuisine'
        >
          <option value='Any'>Any</option>
          {cuisineOptions}
        </select>

        <label htmlFor='meal-type'>Choose a meal type</label>
        <select
          name='meal-type'
          id='meal-type'
        >
          <option value='Any'>Any</option>
          {mealTypeOptions}
        </select>

        <label htmlFor='max-time'>
          Enter the maximum time in minutes it should take to prepare and cook
          the recipe
        </label>
        <input type='text' />
      </form>
      <Navbar />
    </section>
  );
};
