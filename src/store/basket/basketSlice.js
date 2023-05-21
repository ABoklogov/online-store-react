import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // -------- список продуктов --------
    setBasket: (state, { payload }) => ({
      ...state,
      items: [...payload],
    }),
    // загрузка
    loadingSetBasket: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
    // ошибка
    errorSetBasket: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
});

export const {
  setBasket,
  loadingSetBasket,
  errorSetBasket,
} = basketSlice.actions;