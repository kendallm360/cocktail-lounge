export type TypeState = {
  drinkList: Drink[];
  id?: string;
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
  strIngredient7?: string | null;
  strIngredient8?: string | null;
  strIngredient9?: string | null;
  strIngredient10?: string | null;
  strIngredient11?: string | null;
};

export type Props = {
  props: string | Drink;
};
