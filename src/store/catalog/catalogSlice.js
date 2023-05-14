import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {
    items: [],
    isLoading: false,
    error: '',
  },
  cardProduct: {
    id: '',
    name: '',
    price: '',
    image: '',
    isLoading: false,
    error: '',
  },
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    // -------- список продуктов --------
    setCatalog: (state, { payload }) => ({
      ...state,
      products: {
        ...state.products,
        items: [...payload],
      }
    }),
    // загрузка
    loadingSetCatalog: (state, { payload }) => ({
      ...state,
      products: {
        ...state.products,
        isLoading: payload,
      }
    }),
    // ошибка
    errorSetCatalog: (state, { payload }) => ({
      ...state,
      products: {
        ...state.products,
        error: payload,
      }
    }),

    // -------- карточка товара --------
    // загрузка
    loadingSetProduct: (state, { payload }) => ({
      ...state,
      cardProduct: {
        ...state.cardProduct,
        isLoading: payload,
      }
    }),
    // ошибка
    errorSetProduct: (state, { payload }) => ({
      ...state,
      cardProduct: {
        ...state.cardProduct,
        error: payload,
      }
    }),
  },
});

export const {
  setCatalog,
  loadingSetCatalog,
  errorSetCatalog,
  loadingSetProduct,
  errorSetProduct,
} = catalogSlice.actions;