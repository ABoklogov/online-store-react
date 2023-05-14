import {
  setCatalog,
  loadingSetCatalog,
  errorSetCatalog,
  loadingSetProduct,
  errorSetProduct,
} from './catalogSlice';

// список продуктов
export const fetchProducts = (id, name) => async (dispatch, getState) => {
  // const { catalog } = getState();
  try {
    // const { data } = await API.fetchProducts(id);
  } catch (error) {

    console.log(error.message);
  };
};