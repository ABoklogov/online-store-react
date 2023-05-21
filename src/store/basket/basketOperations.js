import {
  setBasket,
  loadingSetBasket,
  errorSetBasket,
} from './basketSlice';

// получение всей корзины
export const fetchBasket = () => async (dispatch, getState) => {
  const { basket } = getState();

  try {

  } catch (error) {

    console.log(error.message);
  };
};

// добавление в корзину
export const addProductBasket = (product) => async (dispatch, getState) => {
  console.log("🚀 ~ addProductBasket ~ product:", product)
  const { basket } = getState();

  try {

  } catch (error) {

    console.log(error.message);
  };
};

// удаление из корзины
export const removeProductBasket = (id) => async (dispatch, getState) => {
  const { basket } = getState();

  try {

  } catch (error) {

    console.log(error.message);
  };
};

// очистка корзины
export const removeBasket = () => async (dispatch, getState) => {
  const { basket } = getState();

  try {

  } catch (error) {

    console.log(error.message);
  };
};