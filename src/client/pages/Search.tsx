import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { UserData, Diet, Intolerance } from '../../Types';
import { cuisineArr, mealTypesArr } from '../utils/dataObjects';

type SearchProps = {
  userData: UserData;
};
type SearchFormData = {
  diet?: Diet;
  intolerance: { [key in Intolerance]: boolean };
  cuisine: string;
  mealType: string;
  maxTime: string;
};
type BackendSearchData = {
  diet?: Diet;
  intolerance: string;
  cuisine?: string;
  mealType?: string;
  maxTime?: string;
};
export default ({ userData }: SearchProps) => {
  const initialFormData: SearchFormData = {
    intolerance: userData.intolerance,
    cuisine: 'Any',
    mealType: 'Any',
    maxTime: '',
  };
  if (userData.diet) initialFormData.diet = userData.diet;

  const [formData, setFormData] = useState<SearchFormData>(initialFormData);
  const [isInputInvalid, setIsInputInvalid] = useState<boolean>(false);

  const cuisineOptions = cuisineArr.map((cuisine) => (
    <option value={cuisine}>{cuisine}</option>
  ));

  const mealTypeOptions = mealTypesArr.map((mealType) => (
    <option value={mealType}>{mealType}</option>
  ));

  function handleSubmit() {
    const { intolerance, cuisine, mealType, maxTime } = formData;
    const diet = formData.diet ? formData.diet : null;

    if (cuisine === 'Any' && mealType === 'Any' && maxTime === '')
      return setIsInputInvalid(true);

    const intoleranceString = Object.entries(intolerance)
      .filter((entry) => entry[1])
      .map((entry) => entry[0])
      .join(',');

    const searchData: BackendSearchData = {
      ...formData,
      intolerance: intoleranceString,
    };
    if (searchData.cuisine === 'Any') delete searchData.cuisine;
    if (searchData.mealType === 'Any') delete searchData.mealType;
    if (searchData.maxTime?.length === 0) delete searchData.maxTime;
    console.log({ searchData });
    axios.post('api/search', searchData);
    // TODO: USE RESULTS TO POPULATE RECIPE CARD STATE
  }

  return (
    <section id='search'>
      <h1>Search Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1>Narrow down your search</h1>
        <p>Please fill out at least one search field</p>

        <label htmlFor='cuisine'>Choose a cuisine</label>
        <select
          name='cuisine'
          id='cuisine'
          value={formData.cuisine}
          onChange={(e) =>
            setFormData((state) => ({ ...state, cuisine: e.target.value }))
          }
        >
          <option value='Any'>Any</option>
          {cuisineOptions}
        </select>

        <label htmlFor='meal-type'>Choose a meal type</label>
        <select
          name='meal-type'
          id='meal-type'
          value={formData.mealType}
          onChange={(e) =>
            setFormData((state) => ({ ...state, mealType: e.target.value }))
          }
        >
          <option value='Any'>Any</option>
          {mealTypeOptions}
        </select>

        <label htmlFor='max-time'>
          Enter the maximum time in minutes it should take to prepare and cook
          the recipe
        </label>
        <input
          id='max-time'
          name='max-time'
          type='text'
          maxLength={3}
          pattern='[0-9]*'
          value={formData.maxTime}
          onChange={(e) =>
            setFormData((state) => ({ ...state, maxTime: e.target.value }))
          }
        />
        <button>Submit</button>
        {isInputInvalid && <p>Must fill out at least one search field</p>}
      </form>
      <Navbar />
    </section>
  );
};
