import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Colocamos os colchetes pois estamos acessando uma propriedade da api
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
