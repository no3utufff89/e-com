import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})
export default store;
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
