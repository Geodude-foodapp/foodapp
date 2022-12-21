import { Intolerance } from '../../Types';

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

export { intoleranceObj };
