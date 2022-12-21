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
