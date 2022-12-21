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

const cuisineArr: string[] = [
  'African',
  'American',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'Eastern European',
  'European',
  'French',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'Southern',
  'Spanish',
  'Thai',
  'Vietnamese',
];

const mealTypesArr: string[] = [
  'main course',
  'side dish',
  'dessert',
  'appetizer',
  'salad',
  'bread',
  'breakfast',
  'soup',
  'beverage',
  'sauce',
  'marinade',
  'fingerfood',
  'snack',
  'drink',
];

export { dietArr, intoleranceArr, intoleranceObj, cuisineArr, mealTypesArr };
