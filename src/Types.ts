export type Diet =
  | 'Gluten Free'
  | 'Ketogenic'
  | 'Vegetarian'
  | 'Lacto-Vegetarian'
  | 'Ovo-Vegetarian'
  | 'Vegan'
  | 'Pescetarian'
  | 'Paleo'
  | 'Primal'
  | 'Low FODMAP'
  | 'Whole30';

export type Intolerance =
  | 'Dairy'
  | 'Egg'
  | 'Gluten'
  | 'Grain'
  | 'Peanut'
  | 'Seafood'
  | 'Sesame'
  | 'Shellfish'
  | 'Soy'
  | 'Sulfite'
  | 'Tree Nut'
  | 'Wheat';

export type UserFormState = {
  name: string;
  password: string;
  // TODO: ADD RESTRICTIONS AND OTHER PROFILE INFO
  diet?: Diet;
  intolerance: { [key in Intolerance]: boolean };
};

export type RecipeData = {
  id: number;
  title: string;
  image: string;
  sourceurl: string;
};

export type FavoriteData = {
  id: number;
  title: string;
  image: string;
  sourceurl: string;
};

// UserData state stored in App.tsx
export type UserData = {
  name: string;
  diet?: Diet;
  intolerance: { [key in Intolerance]: boolean };
  favorites: FavoriteData[];
};

export type BackendUserFormState = {
  name: string;
  password: string;
  diet?: Diet;
  intolerance: string;
};
