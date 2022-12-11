import { configureStore } from '@reduxjs/toolkit';

import { characterApiSlice } from '../features/characters/characters-slice';
import favouriteReducer from '../features/favourites/favourites-slice';

export const store = configureStore({
    reducer: {
        [characterApiSlice.reducerPath]: characterApiSlice.reducer,
        favourites: favouriteReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(characterApiSlice.middleware);
    }

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;