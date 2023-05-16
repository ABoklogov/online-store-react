import { getProducts } from "services/api";
import {
  setCatalog,
  loadingSetCatalog,
  errorSetCatalog,
  loadingSetProduct,
  errorSetProduct,
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
        console.log("🚀 ~ fetchProducts ~ data:", data)
        dispatch(setCatalog(data));
      };
    };
  } catch (error) {
    dispatch(loadingSetCatalog(false));
    dispatch(errorSetCatalog(error.message));
    console.log(error.message);
  };
};