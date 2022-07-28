export type IState = {
  drinkArray: Drink[];
};

export type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export type SpecialtyState = {
  martiniDrinks: SpecialtyDrink[];
};

export type SpecialtyDrink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export type Props = {
  props: string;
};

export type RandomDrinks = {
  randomDrinks: Drink[];
};
