import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/dataSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from './services/product'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
setupListeners(store.dispatch)