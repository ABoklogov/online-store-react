import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {
    items: [],
    isLoading: false,
    error: '',
  },
  cardProduct: {
    // product: null,
    isLoading: false,
    error: '',
  },
  sizes: {
    items: [],
    selecteSize: null,
    isLoading: false,
    error: '',
  }
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
    // карточка товара
    // setCardProduct: (state, { payload }) => ({
    //   ...state,
    //   cardProduct: {
    //     ...state.cardProduct,
    //     product: payload,
    //   }
    // }),
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

    // ---------- размеры ----------
    setSizes: (state, { payload }) => ({
      ...state,
      sizes: {
        ...state.sizes,
        items: [...payload],
      }
    }),
    // выбранный размер
    setSelectedSize: (state, { payload }) => ({
      ...state,
      sizes: {
        ...state.sizes,
        selecteSize: payload,
      }
    }),
    // загрузка
    loadingSetSizes: (state, { payload }) => ({
      ...state,
      sizes: {
        ...state.sizes,
        isLoading: payload,
      }
    }),
    // ошибка
    errorSetSizes: (state, { payload }) => ({
      ...state,
      sizes: {
        ...state.sizes,
        error: payload,
      }
    }),
  },
});

export const {
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
} = catalogSlice.actions;