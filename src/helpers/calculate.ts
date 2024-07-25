import { getAllMeals } from "@storage/meals/actionsMeals";

import { DataListItemProps } from "@screens/Home/types";

export async function calculate() {
  const storedMeals = await getAllMeals();

  if (storedMeals.length === 0) {
    return {
      percentage: 0.0,
      mealDietIn: 0,
      mealDietOut: 0,
      mealsTotal: 0,
    };
  }

  const countDietIn = storedMeals
    .map(({ data }: DataListItemProps) => {
      const filters = data.filter((item) => item.status === true);

      return filters.length;
    })
    .reduce((a: number, b: number) => a + b, 0);

  const countDietOut = storedMeals
    .map(({ data }: DataListItemProps) => {
      const filters = data.filter((item) => item.status === false);

      return filters.length;
    })
    .reduce((a: number, b: number) => a + b, 0);

  const currentPercentage = (countDietIn / (countDietIn + countDietOut)) * 100;

  const data = {
    percentage: parseInt(currentPercentage.toFixed(2)),
    mealDietIn: countDietIn,
    mealDietOut: countDietOut,
    mealsTotal: countDietIn + countDietOut,
  };

  return data;
}
