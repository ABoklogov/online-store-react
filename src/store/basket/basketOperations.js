import {
  setBasket,
  loadingSetBasket,
  errorSetBasket,
} from './basketSlice';

const addLocalStorage = (array) => {
  localStorage.setItem('basket', JSON.stringify(array));
};
const fetchLocalStorage = () => {
  return JSON.parse(localStorage.getItem("basket"));
};

// получение всей корзины
export const fetchBasket = () => async (dispatch) => {
  try {
    dispatch(loadingSetBasket(true));
    const basketProducts = fetchLocalStorage();

    if (!basketProducts) addLocalStorage([]);

    dispatch(loadingSetBasket(false));
    dispatch(errorSetBasket(''));
    dispatch(setBasket(basketProducts));
  } catch (error) {
    dispatch(loadingSetBasket(false));
    dispatch(errorSetBasket(error.message));
    console.log(error.message);
  };
};

// добавление в корзину
export const addProductBasket = (product) => async (dispatch, getState) => {
  const { basket } = getState();
  let basketProducts = basket.items;

  try {
    dispatch(loadingSetBasket(true));
    const findProduct = basketProducts.find(el => el.idBasket === product.idBasket);

    if (findProduct) {
      throw new Error('Данный товар уже есть в корзине!');
    } else {
      basketProducts = [...basketProducts, product];
      dispatch(loadingSetBasket(false));
      dispatch(errorSetBasket(''));

      addLocalStorage(basketProducts);
      dispatch(setBasket(basketProducts));
    };
  } catch (error) {
    dispatch(loadingSetBasket(false));
    dispatch(errorSetBasket(error.message));
    console.log(error.message);
  };
};

// удаление из корзины
export const removeProductBasket = (id) => async (dispatch, getState) => {
  const { basket } = getState();

  try {
    const totalProducts = basket.items.filter(el => el.idBasket !== id);
    dispatch(setBasket(totalProducts));
    addLocalStorage(totalProducts);
  } catch (error) {
    dispatch(errorSetBasket(error.message));
    console.log(error.message);
  };
};

// очистка корзины
export const removeBasket = () => async (dispatch) => {
  try {
    dispatch(setBasket([]));
    addLocalStorage([]);
  } catch (error) {
    dispatch(errorSetBasket(error.message));
    console.log(error.message);
  };
};