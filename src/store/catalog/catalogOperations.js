import {
  getProducts,
  getProduct,
  getSizes,
  getSize,
} from "services/api";
import {
  setCatalog,
  loadingSetCatalog,
  errorSetCatalog,
  // setCardProduct,
  loadingSetProduct,
  errorSetProduct,
  setSizes,
  setSelectedSize,
  loadingSetSizes,
  errorSetSizes,
} from './catalogSlice';

// список продуктов
export const fetchProducts = () => async (dispatch, getState) => {
  const { catalog } = getState();

  try {
    if (catalog.products.items.length > 0) {
      return
    } else {
      dispatch(loadingSetCatalog(true));
      const data = await getProducts();

      if (data === undefined) {
        throw new Error('Server Error!');
      } else {
        dispatch(loadingSetCatalog(false));
        dispatch(errorSetCatalog(''));

        const products = data;
        products.map(product => {
          product.image = product.colors[0]?.images[0];
          return product;
        });

        dispatch(setCatalog(products));
      };
    };
  } catch (error) {
    dispatch(loadingSetCatalog(false));
    dispatch(errorSetCatalog(error.message));
    console.log(error.message);
  };
};

// карточка товара
export const fetchCardProduct = (id) => async (dispatch) => {
  try {
    dispatch(loadingSetProduct(true));
    const data = await getProduct(id);

    if (data === undefined) {
      throw new Error('Server Error!');
    } else {
      dispatch(loadingSetProduct(false));
      dispatch(errorSetProduct(''));
      return data;
    };
  } catch (error) {
    dispatch(loadingSetProduct(false));
    dispatch(errorSetProduct(error.message));
    console.log(error.message);
  };
};

// размеры
export const fetchSizes = () => async (dispatch) => {
  try {
    dispatch(loadingSetSizes(true));
    const data = await getSizes();

    if (data === undefined) {
      throw new Error('Server Error!');
    } else {
      dispatch(loadingSetSizes(false));
      dispatch(errorSetSizes(''));
      dispatch(setSizes(data));
    };
  } catch (error) {
    dispatch(loadingSetSizes(false));
    dispatch(errorSetSizes(error.message));
    console.log(error.message);
  };
};

export const chooseSize = (id) => async (dispatch) => {
  try {
    dispatch(loadingSetSizes(true));
    const data = await getSize(id);
    // console.log("🚀 ~ chooseSize ~ data:", data)

    if (data === undefined) {
      throw new Error('Server Error!');
    } else {
      dispatch(loadingSetSizes(false));
      dispatch(errorSetSizes(''));
      dispatch(setSelectedSize(data));
    };
  } catch (error) {
    dispatch(loadingSetSizes(false));
    dispatch(errorSetSizes(error.message));
    console.log(error.message);
  };
};