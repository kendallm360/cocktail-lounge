export type TypeState = {
  drinkList: Drink[];
  id?: string;
  error?: false | true;
};

export type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions?: string | null;
  strIngredient1?: string | null;
  strIngredient2?: string | null;
  strIngredient3?: string | null;
  strIngredient4?: string | null;
  strIngredient5?: string | null;
  strIngredient6?: string | null;
  error?: false | true;
};

export type Props = {
  props: string | Drink;
};
