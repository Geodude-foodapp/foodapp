import { Diet, Intolerance } from '../../Types';

const dietArr: Diet[] = [
  'Gluten Free',
  'Ketogenic',
  'Vegetarian',
  'Lacto-Vegetarian',
  'Ovo-Vegetarian',
  'Vegan',
  'Pescetarian',
  'Paleo',
  'Primal',
  'Low FODMAP',
  'Whole30',
];

const intoleranceArr: Intolerance[] = [
  'Dairy',
  'Egg',
  'Gluten',
  'Grain',
  'Peanut',
  'Seafood',
  'Sesame',
  'Shellfish',
  'Soy',
  'Sulfite',
  'Tree Nut',
  'Wheat',
];

const intoleranceObj: { [key in Intolerance]: boolean } = {
  Dairy: false,
  Egg: false,
  Gluten: false,
  Grain: false,
  Peanut: false,
  Seafood: false,
  Sesame: false,
  Shellfish: false,
  Soy: false,
  Sulfite: false,
  'Tree Nut': false,
  Wheat: false,
};

export { dietArr, intoleranceArr, intoleranceObj };
