import { getProducts } from "services/api";
import {
  setCatalog,
  loadingSetCatalog,
  errorSetCatalog,
  // setCardProduct,
  // loadingSetProduct,
  // errorSetProduct,
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
// export const fetchCardProduct = (id) => async (dispatch, getState) => {
//   const { catalog } = getState();

//   try {
//     dispatch(loadingSetProduct(true));
//     const findProduct = catalog.products.items.find(product => product.id === id);

//     if (findProduct) {
//       dispatch(errorSetProduct(''));
//       dispatch(loadingSetProduct(false));
//       dispatch(setCardProduct(findProduct));
//     };
//   } catch (error) {
//     dispatch(loadingSetProduct(false));
//     dispatch(errorSetProduct(error.message));
//     console.log(error.message);
//   };
// };