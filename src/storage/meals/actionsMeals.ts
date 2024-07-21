import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLECTIONS } from "@storage/storageConfig";

import { DataListItemProps, ItemListProps } from "@screens/Home/types";

export async function mealCreate(newMeal: ItemListProps) {
  let newListMeal: DataListItemProps[] | undefined;

  try {
    const storedMeals = await getAllMeals();

    // - nao tenho item salvos no storage
    if (storedMeals.length === 0) {
      const data = [
        {
          title: newMeal.date,
          data: [newMeal],
        },
      ];

      newListMeal = data;
    } else {
      // -  procurando por itens na data do novo registro
      const currentItemDate = storedMeals.filter(
        (item: { title: string }) => item.title === newMeal.date
      );

      // - nao tenho item nesta data
      if (currentItemDate.length === 0) {
        const newItemDate = {
          title: newMeal.date,
          data: [newMeal],
        };

        storedMeals?.push(newItemDate);

        newListMeal = storedMeals;
      } else {
        // - Pega os itens da data
        const currentItens = currentItemDate[0].data.map((item: any) => {
          return item;
        });

        // - adiciona um item na mesma data
        currentItens.push(newMeal);

        // - coloca todos os itens da data no mesmo nó
        const newItemDate = {
          title: newMeal.date,
          data: currentItens,
        };

        // - remove os itens da data do storage pq os agrupei na variavel newItemDate
        newListMeal = storedMeals.filter(
          (item: { title: string }) => item.title !== newMeal.date
        );

        // - coloca todos os itens juntos
        newListMeal?.push(newItemDate);
      }
    }

    // - Ordena por data string do maior pro menor
    if (newListMeal) {
      newListMeal.sort(function (a, b) {
        let firstDate = a.title.split("/").reverse().join("");
        let nextDate = b.title.split("/").reverse().join("");

        return firstDate.localeCompare(nextDate);
      });
    }

    // - Salva no storage nova lista
    await AsyncStorage.setItem(MEALS_COLECTIONS, JSON.stringify(newListMeal));
  } catch (error) {
    throw error;
  }
}

export async function getAllMeals() {
  const storage = await AsyncStorage.getItem(MEALS_COLECTIONS);

  const meals = storage ? JSON.parse(storage) : [];
  return meals;
}

export async function mealUpdate(editMeal: ItemListProps) {
  let newListMeal: DataListItemProps[] | undefined;

  try {
    const storedMeals = await getAllMeals();

    //- remove o item editado da lista do storage
    newListMeal = storedMeals
      .map((item: any) => {
        let dataExist = item.data.filter((list: any) => {
          return list.id !== editMeal.id;
        });

        // - Se nao tiver itens na data, remove o nó (data sem registros inseridos)
        if (dataExist.length === 0) return;

        return {
          title: item.title,
          data: dataExist,
        };
      })
      .filter((final: any) => {
        return final !== undefined;
      });

    // -  procurando por itens na data do registro editado
    const currentItemDate = newListMeal?.filter(
      (item: { title: string }) => item.title === editMeal.date
    );

    // - nao tenho item nesta data
    if (currentItemDate?.length === 0) {
      const editItemDate = {
        title: editMeal.date,
        data: [editMeal],
      };

      newListMeal?.push(editItemDate);
    } else {
      // - Pega os itens da data
      const currentItens = currentItemDate![0].data.map((item: any) => {
        return item;
      });

      // - adiciona um item na mesma data
      currentItens.push(editMeal);

      // - coloca todos os itens da data no mesmo nó
      const newItemDate = {
        title: editMeal.date,
        data: currentItens,
      };

      // - remove os itens da data do storage pq os agrupei na variavel newItemDate
      newListMeal = newListMeal?.filter(
        (item: { title: string }) => item.title !== editMeal.date
      );

      // - coloca todos os itens juntos
      newListMeal?.push(newItemDate);
    }

    // - Ordena por data string do maior pro menor
    if (newListMeal) {
      newListMeal.sort(function (a, b) {
        let firstDate = a.title.split("/").reverse().join("");
        let nextDate = b.title.split("/").reverse().join("");

        return firstDate.localeCompare(nextDate);
      });
    }

    // - Salva no storage nova lista
    await AsyncStorage.setItem(MEALS_COLECTIONS, JSON.stringify(newListMeal));
  } catch (error) {
    throw error;
  }
}

export async function reset() {
  return AsyncStorage.clear();
}
