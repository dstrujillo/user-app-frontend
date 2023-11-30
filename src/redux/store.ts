import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//slices
import settingsSlice from './slices/settings.slice';

//services
import userApi from './services/user.service';

const persistSetting = {
  key: 'settings',
  storage,
  whitelist: ['themeMode']
};

const persistUser = {
  key: 'user',
  storage,
  whitelist: ['accessToken']
};

const store = configureStore({
  reducer: {
    //slices
    [settingsSlice.name]: persistReducer<
      ReturnType<typeof settingsSlice.reducer>
    >(persistSetting, settingsSlice.reducer),
    //services
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(userApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
